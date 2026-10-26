'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import SectionHeader from '@/components/ui/SectionHeader';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim())              e.name    = 'Name is required.';
  if (!f.email.trim())             e.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
                                   e.email   = 'Enter a valid email.';
  if (!f.subject.trim())           e.subject = 'Subject is required.';
  if (f.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
  return e;
}

const inputClass = `w-full px-4 py-3 rounded-xl text-sm
  bg-[#FAFBFF] dark:bg-[#080C14]
  border border-slate-200 dark:border-slate-700
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-400 dark:placeholder:text-slate-600
  focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400
  focus:ring-2 focus:ring-indigo-500/20
  transition-all duration-200`;

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1200));
    const mailto = `mailto:hamidoumamoudou125@icloud.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#EEF2FF] dark:bg-[#0D1220]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-[38%_62%] gap-8 items-start">

          {/* ── Info card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 bg-white dark:bg-[#111827]
                       border border-slate-200 dark:border-slate-800 card-shadow h-fit"
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-white text-2xl">H</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-slate-100">Hamid</h3>
                <p className="font-code text-xs text-indigo-500 dark:text-indigo-400">Full-Stack Dev · Data Scientist</p>
              </div>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-800 mb-6" />

            {/* Contact details */}
            <div className="space-y-4 mb-6">
              {[
                { icon: Mail,     text: 'hamidoumamoudou125@icloud.com', href: 'mailto:hamidoumamoudou125@icloud.com' },
                { icon: LinkedinIcon, text: 'linkedin.com/in/hamid-mahmoud', href: 'https://www.linkedin.com/in/hamid-mahmoud-35459730a/' },
                { icon: GithubIcon,   text: 'github.com/hamid78631',         href: 'https://github.com/hamid78631' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400
                             hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0
                                   group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={14} className="text-indigo-500" />
                  </span>
                  <span className="truncate">{text}</span>
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 w-fit">
              <Clock size={12} className="text-emerald-500" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Responds within 24 hours
              </span>
            </div>
          </motion.div>

          {/* ── Form ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 bg-white dark:bg-[#111827]
                         border border-slate-200 dark:border-slate-800 card-shadow space-y-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="Project Inquiry / Collaboration / Other"
                  className={inputClass}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                           bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm
                           hover:scale-[1.01]
                           disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                           transition-all duration-200"
              >
                {status === 'loading' && (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                )}
                {status === 'success' && <CheckCircle size={16} />}
                {status === 'error'   && <AlertCircle size={16} />}
                {status === 'idle'    && <Send size={16} />}
                {status === 'loading' ? 'Sending…'
                  : status === 'success' ? 'Message Sent!'
                  : status === 'error'   ? 'Something went wrong'
                  : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}