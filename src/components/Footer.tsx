import { Link } from 'react-router-dom';
import { PROMISE } from '../data';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Bikes & Pricing', to: '/bikes-pricing' },
  { label: 'How It Works / FAQ', to: '/how-it-works' },
  { label: 'Check Availability', to: '/check-availability' },
  { label: 'Privacy Policy', to: '/check-availability' },
  { label: 'Terms / Hire Conditions', to: '/check-availability' },
  { label: 'Contact', to: '/check-availability' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="font-display font-bold text-2xl tracking-tight">
              RIDE<span className="text-bronze">WORKS</span>
            </Link>
            <p className="mt-5 text-base text-white/70 max-w-sm leading-relaxed">
              Rideworks provides premium motorcycle and motorbike hire for experienced riders
              seeking self-guided New Zealand road rides.
            </p>
            <p className="mt-5 text-sm font-medium text-bronze-light">{PROMISE}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/80 hover:text-bronze-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-white/50 mb-5">
              Contact
            </h4>
            <p className="text-sm text-white/80">East Auckland, New Zealand</p>
            <p className="text-sm text-white/80 mt-2">hello@rideworks.nz</p>
            <p className="text-sm text-white/80 mt-2">Collection by appointment</p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-white/45 leading-relaxed max-w-3xl">
            Rideworks is an independent motorcycle hire business. BMW and Triumph names are used to
            identify the motorcycles available for hire. Rideworks is not affiliated with BMW
            Motorrad or Triumph Motorcycles.
          </p>
          <p className="text-xs text-white/45 leading-relaxed max-w-3xl">
            All hires are subject to rider approval, licence/ID checks, payment, bond/excess
            authorisation, insurance terms and signed hire agreement.
          </p>
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Rideworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
