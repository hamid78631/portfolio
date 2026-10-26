import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-[#FAFBFF] dark:bg-[#080C14]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-heading font-bold text-xl">
            <span className="gradient-text">H</span>
            <span className="text-slate-900 dark:text-slate-100">.</span>
          </span>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon,   href: 'https://github.com/hamid78631',                    label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/hamid-mahmoud-35459730a/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700
                           flex items-center justify-center text-slate-500
                           hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-500/10
                           transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Hamid. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}