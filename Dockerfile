# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=22-alpine3.22
# Doit correspondre à l'Alpine de l'image node ci-dessus (même musl / libstdc++)
ARG ALPINE_VERSION=3.22

# ---------- 1. Dépendances ----------
FROM node:${NODE_VERSION} AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# ---------- 2. Build ----------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- 3. Runtime minimal ----------
# Alpine nu + binaire node seul (sans npm/yarn/corepack) : plus léger, moins de surface d'attaque
FROM alpine:${ALPINE_VERSION} AS runner
WORKDIR /app

RUN apk add --no-cache libstdc++ libgcc
COPY --from=builder /usr/local/bin/node /usr/local/bin/node

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs \
    && mkdir -p .next/cache && chown -R nextjs:nodejs .next

# Uniquement la sortie standalone + assets statiques
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1

CMD ["node", "server.js"]
