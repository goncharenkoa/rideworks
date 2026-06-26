import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    // IntersectionObserver-free scroll flag without per-frame listeners on the tree.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-paper border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl tracking-tight text-charcoal">
          RIDE<span className="text-bronze">WORKS</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-bronze' : 'text-charcoal hover:text-bronze'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/check-availability"
            className="px-6 py-2.5 bg-bronze text-white rounded-sm text-sm font-medium hover:bg-bronze-dark transition-colors"
          >
            Check Availability
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-[2px] w-6 bg-charcoal transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-charcoal transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-6 bg-charcoal transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="text-base font-medium text-charcoal">
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/check-availability"
            className="w-full text-center px-6 py-3 bg-bronze text-white rounded-sm text-sm font-medium"
          >
            Check Availability
          </Link>
        </div>
      )}
    </header>
  );
}
