'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { useTypewriter } from '@/hooks/useTypewriter';
import dynamic from 'next/dynamic';

const ParticlesCanvas = dynamic(() => import('@/components/canvas/ParticlesCanvas'), { ssr: false });

const ROLES = [
  'Full-Stack Developer',
  'Data Scientist',
  'Cloud Engineer',
  'DevOps Enthusiast',
  'BI Developer',
];

const BADGES = [
  { text: '⚡ 5+ Years Exp.',   pos: 'top-2 -right-4 lg:-right-10' },
  { text: '🚀 20+ Projects',    pos: 'bottom-8 -left-4 lg:-left-10' },
  { text: '☁️ Cloud & DevOps', pos: 'top-1/3 -left-4 lg:-left-14' },
  { text: '📊 Data Driven',     pos: 'bottom-1/3 -right-2 lg:-right-12' },
];

const socials = [
  { icon: GithubIcon,   href: 'https://github.com/hamid78631',                    label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/hamid-mahmoud-35459730a/', label: 'LinkedIn' },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 40, 2200);
  const [imgErr, setImgErr] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesCanvas />

      {/* Soft organic blob bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-10 -left-16 w-[420px] h-[420px]
                      bg-indigo-500/[0.06] dark:bg-indigo-500/[0.08]"
          style={{ borderRadius: '62% 38% 55% 45% / 45% 55% 38% 62%' }}
        />
        <div className="absolute top-24 right-16 w-24 h-24 rounded-full
                        border-2 border-indigo-500/10 dark:border-indigo-400/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 items-center">

          {/* ── Left: text ───────────────────────────────── */}
          <div className="space-y-5">
            <motion.p {...fadeUp(0.15)} className="font-code text-slate-500 dark:text-slate-400 text-base">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              {...fadeUp(0.3)}
              className="font-heading font-bold leading-tight"
              style={{ fontSize: 'clamp(2.4rem,6vw,5rem)' }}
            >
              <span className="text-slate-900 dark:text-slate-100">Hamid</span>
            </motion.h1>

            <motion.div {...fadeUp(0.45)} className="min-h-[2.8rem] flex items-center">
              <h2
                className="font-heading font-semibold gradient-text"
                style={{ fontSize: 'clamp(1.35rem,3vw,2.2rem)' }}
              >
                {role}
                <span className="animate-blink text-indigo-500 ml-0.5">|</span>
              </h2>
            </motion.div>

            <motion.p
              {...fadeUp(0.6)}
              className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[520px]"
            >
              I build scalable web applications, extract insights from data, and automate
              infrastructure. Passionate about clean code and impactful solutions.
            </motion.p>

            <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-4 pt-1">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-500
                           hover:bg-indigo-600 text-white font-semibold text-sm shadow-lg hover:scale-105
                           transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400
                           font-semibold text-sm hover:bg-indigo-500/10 hover:scale-105
                           transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.9)} className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700
                             flex items-center justify-center text-slate-600 dark:text-slate-400
                             hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-500/10
                             hover:scale-110 transition-all duration-250"
                >
                  <Icon size={17} />
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="ml-1 flex items-center gap-1.5 text-sm font-medium
                           text-slate-500 dark:text-slate-400 hover:text-indigo-500
                           dark:hover:text-indigo-400 transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* ── Right: photo ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            {/* Soft backing blob */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/[0.07] dark:bg-indigo-500/[0.1]" />

            {/* Photo bubble — solid border, gentle float */}
            <div className="relative animate-float" style={{ animationDuration: '6s' }}>
              <div
                className="relative overflow-hidden rounded-full border-[5px]
                           border-indigo-500 dark:border-indigo-400
                           w-[260px] h-[260px] md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px]
                           shadow-xl"
              >
                {!imgErr ? (
                  <img
                    src="/images/profile.jpg"
                    alt="Hamid"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={() => setImgErr(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-500 flex items-center justify-center">
                    <span className="font-heading font-bold text-white" style={{ fontSize: '5rem' }}>H</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badges */}
            {BADGES.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.18, type: 'spring', stiffness: 200 }}
                className={`absolute ${b.pos} z-10`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div
                  className="animate-float px-3 py-1.5 rounded-full glass
                             bg-white/85 dark:bg-slate-900/85 border border-indigo-500/20
                             text-xs font-medium text-slate-700 dark:text-slate-300
                             shadow-lg whitespace-nowrap"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {b.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5
                     text-slate-400 dark:text-slate-600 pointer-events-none"
        >
          <span className="font-code text-[10px] tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}