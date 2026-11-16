'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Project } from '@/types';

/**
 * Visuel d'un projet : vidéo (prioritaire) ou image.
 * La vidéo ne se télécharge et ne joue que lorsqu'elle est visible à l'écran,
 * et reste sur l'affiche (poster) si l'utilisateur préfère réduire les animations.
 */
export default function ProjectMedia({ project, sizes }: { project: Project; sizes: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [project.video]);

  if (project.video) {
    return (
      <video
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`Démo vidéo du projet ${project.title}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        fill
        sizes={sizes}
        className="object-cover"
      />
    );
  }

  return null;
}
