'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[52px] h-7 rounded-full bg-slate-200 dark:bg-slate-700" />;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="relative w-[52px] h-7 rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      style={{ background: isDark ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : '#e2e8f0' }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark
          ? <Moon size={11} className="text-indigo-600" />
          : <Sun  size={11} className="text-amber-500" />
        }
      </motion.div>
    </button>
  );
}