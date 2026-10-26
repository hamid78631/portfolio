'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Calendar, ChevronDown } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects, projectCategories } from '@/data/projects';
import type { Project } from '@/types';

const CAT_COLORS: Record<Project['category'], string> = {
  web:    'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
  data:   'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
  devops: 'bg-orange-500/15 text-orange-600 dark:text-orange-400',
  bi:     'bg-violet-500/15 text-violet-600 dark:text-violet-400',
  erp:    'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  mobile: 'bg-pink-500/15 text-pink-600 dark:text-pink-400',
};

const TILE_BG: Record<Project['category'], string> = {
  web:    'bg-indigo-50 dark:bg-indigo-500/[0.07]',
  data:   'bg-cyan-50 dark:bg-cyan-500/[0.07]',
  devops: 'bg-orange-50 dark:bg-orange-500/[0.07]',
  bi:     'bg-violet-50 dark:bg-violet-500/[0.07]',
  erp:    'bg-emerald-50 dark:bg-emerald-500/[0.07]',
  mobile: 'bg-pink-50 dark:bg-pink-500/[0.07]',
};

const TILE_ICON_BG: Record<Project['category'], string> = {
  web:    'bg-indigo-500',
  data:   'bg-cyan-500',
  devops: 'bg-orange-500',
  bi:     'bg-violet-500',
  erp:    'bg-emerald-500',
  mobile: 'bg-pink-500',
};

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mb-10 rounded-2xl overflow-hidden bg-white dark:bg-[#111827]
                 border border-slate-200 dark:border-slate-800 card-shadow
                 lg:grid lg:grid-cols-[55%_45%]"
    >
      {/* Image */}
      <div className={`relative h-64 lg:h-auto ${TILE_BG[project.category]} flex items-center justify-center`}>
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-code">
            <Star size={10} className="fill-white" /> Featured
          </span>
        </div>
        <div className="text-center px-8">
          <div className={`w-20 h-20 rounded-2xl ${TILE_ICON_BG[project.category]} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
            <span className="font-heading font-bold text-white text-3xl">{project.title[0]}</span>
          </div>
          <p className="font-code text-xs text-slate-500 dark:text-slate-400 tracking-wider">
            {project.tags.join(' · ')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-center">
        <span className={`inline-block self-start px-2.5 py-1 rounded-full text-xs font-code mb-4 ${CAT_COLORS[project.category]}`}>
          {project.category.toUpperCase()}
        </span>
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100 mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(t => (
            <span key={t} className="px-2.5 py-0.5 rounded-full font-code text-xs
                                     bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                                     border border-slate-200 dark:border-slate-700">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium
                          hover:scale-105 transition-all duration-200">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700
                          text-slate-700 dark:text-slate-300 text-sm font-medium
                          hover:border-indigo-500 hover:text-indigo-500 transition-all duration-200">
              <GithubIcon size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-2xl overflow-hidden bg-white dark:bg-[#111827]
                 border border-slate-200 dark:border-slate-800
                 hover:border-indigo-400/40 dark:hover:border-indigo-500/40
                 card-shadow hover:glow-sm transition-colors duration-250 flex flex-col"
    >
      {/* Image zone */}
      <div className={`relative h-44 ${TILE_BG[project.category]} flex items-center justify-center overflow-hidden`}>
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-code ${CAT_COLORS[project.category]}`}>
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Placeholder icon */}
        <div className={`w-14 h-14 rounded-xl ${TILE_ICON_BG[project.category]} flex items-center justify-center shadow-md`}>
          <span className="font-heading font-bold text-white text-2xl">{project.title[0]}</span>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/65 flex items-center justify-center gap-3"
            >
              {project.demo && (
                <motion.a
                  initial={{ y: 10 }} animate={{ y: 0 }}
                  href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-900
                             text-xs font-medium hover:scale-105 transition-transform"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={12} /> Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  initial={{ y: 10 }} animate={{ y: 0 }} transition={{ delay: 0.05 }}
                  href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-900
                             text-xs font-medium hover:scale-105 transition-transform"
                  onClick={e => e.stopPropagation()}
                >
                  <GithubIcon size={12} /> Code
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-full font-code text-[10px]
                                     bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                                     border border-slate-200/70 dark:border-slate-700">
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-full font-code text-[10px] text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <span className={`inline-flex items-center gap-1 text-[10px] font-code ${
          project.status === 'completed' ? 'text-emerald-500' : 'text-amber-500'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {project.status === 'completed' ? 'Completed' : 'In Progress'}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-code text-slate-400">
          <Calendar size={10} /> {project.year}
        </span>
      </div>
    </motion.div>
  );
}

const INITIAL_SHOW = 6;

export default function Projects() {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [showAll, setShowAll]     = useState(false);

  const featured    = projects.find(p => p.featured);
  const nonFeatured = projects.filter(p => !p.featured);
  const filtered    = activeCat === 'all' ? nonFeatured : nonFeatured.filter(p => p.category === activeCat);
  const visible     = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="py-24 bg-[#EEF2FF] dark:bg-[#0D1220]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// Portfolio"
          title="Featured Projects"
          subtitle="A selection of work I'm proud of. Each project tells a story."
        />

        {/* Featured */}
        {featured && <FeaturedCard project={featured} />}

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCat(cat.id); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-code transition-all duration-200 focus:outline-none ${
                activeCat === cat.id
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more */}
        {filtered.length > INITIAL_SHOW && !showAll && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo-500
                         text-indigo-500 dark:text-indigo-400 font-medium
                         hover:bg-indigo-500/10 hover:scale-105 transition-all duration-200"
            >
              <ChevronDown size={16} />
              Load More Projects ({filtered.length - INITIAL_SHOW} more)
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}