'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { skills, categoryLabels } from '@/data/skills';
import type { Skill } from '@/types';

const CATS = ['all', 'frontend', 'backend', 'data', 'devops', 'database', 'erp'] as const;
type Cat = typeof CATS[number];

const DEVICON = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/${icon}/${icon}-original.svg`;

const LEVEL_LABELS = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [err, setErr] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl
                 bg-white dark:bg-[#111827]
                 border border-slate-100 dark:border-slate-800
                 hover:border-indigo-400/50 dark:hover:border-indigo-500/50
                 hover:glow-sm transition-colors duration-250 group cursor-default"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center">
        {!err ? (
          <img
            src={DEVICON(skill.icon)}
            alt={skill.name}
            className="w-10 h-10 object-contain"
            onError={() => setErr(true)}
          />
        ) : (
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Name */}
      <span className="font-code text-xs text-slate-700 dark:text-slate-300 text-center leading-tight">
        {skill.name}
      </span>

      {/* Level bar */}
      <div className="w-full space-y-1">
        <div className="h-[3px] w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.03, duration: 0.7 }}
            className="h-full rounded-full bg-indigo-500"
          />
        </div>
        <p className="font-code text-[9px] text-slate-400 text-right">{LEVEL_LABELS[skill.level]}</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Cat>('all');

  const filtered = active === 'all'
    ? skills
    : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="py-24 bg-[#FAFBFF] dark:bg-[#080C14]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// Tech Stack"
          title="Skills & Technologies"
          subtitle="A curated set of tools I use to bring ideas to life."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium font-code transition-all duration-200 focus:outline-none ${
                active === cat
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-400 dark:hover:border-indigo-500'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}