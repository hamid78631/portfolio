'use client';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { timeline } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FAFBFF] dark:bg-[#080C14]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="// Journey"
          title="Experience & Education"
          subtitle="The path that shaped my skills and perspective."
        />

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex md:items-center gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node on timeline */}
                  <div className="absolute left-6 md:left-1/2 top-5 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-indigo-500/40 animate-pulse-ring" />
                    <div className="relative w-4 h-4 rounded-full bg-indigo-500 border-2 border-white dark:border-[#080C14]" />
                  </div>

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[46%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-[#111827]
                                    border border-slate-200 dark:border-slate-800
                                    hover:border-indigo-400/40 dark:hover:border-indigo-500/40
                                    card-shadow transition-all duration-300 hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            item.type === 'work'
                              ? 'bg-indigo-500/10'
                              : 'bg-emerald-500/10'
                          }`}>
                            {item.type === 'work'
                              ? <Briefcase size={14} className="text-indigo-500" />
                              : <GraduationCap size={14} className="text-emerald-500" />
                            }
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">
                              {item.title}
                            </h3>
                            <p className="font-code text-xs text-indigo-500 dark:text-indigo-400">
                              {item.organization}
                            </p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-code text-[10px] px-2.5 py-0.5 rounded-full
                                           bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                            {item.period}
                          </span>
                          {item.location && (
                            <p className="flex items-center justify-end gap-0.5 text-[10px] text-slate-400 mt-1">
                              <MapPin size={9} /> {item.location}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description bullets */}
                      <ul className="space-y-1 mb-3">
                        {item.description.map((d, j) => (
                          <li key={j} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                            {d}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-full font-code text-[9px]
                                                   bg-slate-100 dark:bg-slate-800
                                                   text-slate-500 dark:text-slate-400
                                                   border border-slate-200/70 dark:border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}