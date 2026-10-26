'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, BarChart2, Cloud, Cpu } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const STATS = [
  { value: 20, suffix: '+', label: 'Projects Completed' },
  { value: 5,  suffix: '+', label: 'Years of Experience' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Dedication' },
];

const WHAT_I_DO = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Building robust full-stack applications with Spring Boot, Laravel, React & Angular.',
    color: 'text-indigo-500',
    bg:    'bg-indigo-500/10',
  },
  {
    icon: BarChart2,
    title: 'Data Science & BI',
    desc: 'Extracting insights, building dashboards and ML models with Python & Power BI.',
    color: 'text-cyan-500',
    bg:    'bg-cyan-500/10',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Deploying and scaling on AWS, containerizing with Docker, automating with CI/CD.',
    color: 'text-violet-500',
    bg:    'bg-violet-500/10',
  },
  {
    icon: Cpu,
    title: 'ERP & Information Systems',
    desc: 'Business process automation with Odoo and enterprise system integration.',
    color: 'text-emerald-500',
    bg:    'bg-emerald-500/10',
  },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref  = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#EEF2FF] dark:bg-[#0D1220]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#111827]
                            border border-slate-200 dark:border-slate-800 card-shadow">
              <div className="h-56 w-full bg-indigo-500/[0.06] dark:bg-indigo-500/[0.08] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                  <span className="font-heading font-bold text-white text-5xl">H</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-100">Hamid</h3>
                <p className="font-code text-sm text-indigo-500 dark:text-indigo-400 mt-1">
                  Full-Stack Developer · Data Scientist
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 bg-white dark:bg-[#111827]
                             border border-slate-200 dark:border-slate-800 text-center card-shadow"
                >
                  <p className="font-heading font-bold text-2xl text-indigo-500 dark:text-indigo-400">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <SectionHeader
              eyebrow="// About Me"
              title="Crafting Digital Experiences with Purpose"
              align="left"
            />

            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m a passionate software developer and data scientist with over 5 years of
                experience building end-to-end solutions. I thrive at the intersection of web
                engineering, data intelligence, and cloud infrastructure.
              </p>
              <p>
                From building robust APIs with Spring Boot & Laravel to crafting responsive
                frontends with React & Angular — I bring a full-stack perspective to every
                project. On the data side, I design pipelines, build ML models, and create
                BI dashboards that turn raw data into actionable decisions.
              </p>
            </div>

            {/* What I do */}
            <div className="space-y-4 pt-2">
              {WHAT_I_DO.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-[#111827]
                             border border-slate-100 dark:border-slate-800
                             hover:border-indigo-500/30 dark:hover:border-indigo-500/30
                             transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-slate-900 dark:text-slate-100 text-sm mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}