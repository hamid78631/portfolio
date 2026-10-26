'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    links.forEach(l => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass bg-white/80 dark:bg-[#080C14]/85 border-b border-indigo-500/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-bold text-2xl focus:outline-none"
          >
            <span className="gradient-text">H</span>
            <span className="text-slate-900 dark:text-slate-100">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`relative text-sm font-medium transition-colors duration-200 group focus:outline-none ${
                  active === l.href.slice(1)
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full gradient-bg
                    transition-all duration-300 ${
                      active === l.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                         text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#0D1220]
                         border-l border-indigo-500/10 flex flex-col p-8 md:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-heading font-bold text-2xl">
                  <span className="gradient-text">H</span>
                  <span className="text-slate-900 dark:text-slate-100">.</span>
                </span>
                <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-5">
                {links.map(l => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="text-left text-lg font-medium text-slate-700 dark:text-slate-300
                               hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none"
                  >
                    {l.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}