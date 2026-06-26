import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  className?: string;
  icon?: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 ease-[var(--ease-smooth)] active:translate-y-px';

const variants = {
  primary: 'bg-bronze text-white hover:bg-bronze-dark shadow-sm hover:shadow',
  secondary: 'border border-bronze text-bronze hover:bg-bronze hover:text-white',
  ghost: 'text-charcoal hover:text-bronze',
  white: 'border border-white text-white hover:bg-white hover:text-ink',
};

export function Button({ to, children, variant = 'primary', className = '', icon }: ButtonProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {!icon && <ArrowIcon />}
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
