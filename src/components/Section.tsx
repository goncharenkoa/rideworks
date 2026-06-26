import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

export function SectionHeading({ title, intro, align = 'left', tone = 'dark' }: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal className={isCenter ? 'text-center' : ''}>
      <h2
        className={`font-display font-semibold leading-[1.05] tracking-tight text-3xl md:text-[2.75rem] ${
          tone === 'light' ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-[60ch] ${isCenter ? 'mx-auto' : ''} ${
            tone === 'light' ? 'text-white/70' : 'text-muted'
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-display text-[11px] font-medium uppercase tracking-[0.2em] text-bronze">
      {children}
    </span>
  );
}
