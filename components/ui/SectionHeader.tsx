import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={cn('mb-14', isCenter && 'text-center', className)}>
      <p className="font-code text-indigo-500 dark:text-indigo-400 text-sm tracking-widest uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-900 dark:text-slate-100 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-slate-500 dark:text-slate-400 text-lg leading-relaxed',
            isCenter && 'max-w-2xl mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-[3px] w-16 rounded-full gradient-bg',
          isCenter && 'mx-auto',
        )}
      />
    </div>
  );
}