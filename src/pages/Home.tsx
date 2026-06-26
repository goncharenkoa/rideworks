import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Button } from '../components/Button';
import { Reveal, Stagger } from '../components/Reveal';
import { SectionHeading, Eyebrow } from '../components/Section';
import { BIKES, PROOF_POINTS, PROCESS, PROMISE } from '../data';
import heroImg from '../assets/hero.jpg';
import aucklandImg from '../assets/auckland.jpg';

const PROCESS_ICONS = [
  // 1 Check availability — calendar
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  // 2 Rider review — person + check
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.7"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M16 14l2 2 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // 3 Pre-hire steps — shield check
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l7 4v6c0 4.42-3.13 8.56-7 9.93C8.13 20.56 5 16.42 5 12V6l7-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // 4 Collect by appointment — map pin
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/></svg>,
  // 5 Ride self-guided — compass
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  // 6 Return and final check — rotate + check
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12a8 8 0 1 0 1.5-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M2 7l3.5 3.5L9 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

const TRUST_ITEMS = [
  {
    title: 'Ride-Ready Before You Land',
    desc: 'Everything completed before arrival.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l7 4v6c0 4.42-3.13 8.56-7 9.93C8.13 20.56 5 16.42 5 12V6l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Premium BMW & Triumph Motorcycles',
    desc: 'Prepared for touring, not just transportation.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Personal Service From Start to Finish',
    desc: 'Direct communication with the owner.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.6"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
];

export function Home() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, -200]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.3'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* HERO — full-bleed with all content */}
      <section className="relative flex flex-col overflow-hidden bg-charcoal">
        {/* Background image — parallax */}
        <motion.img
          src={heroImg}
          alt="Rider standing beside a motorcycle at sunset overlooking New Zealand mountains and winding road"
          className="absolute -top-[10%] left-0 h-[125%] w-full object-cover object-center"
          style={reduce ? {} : { y: heroY }}
          loading="eager"
          initial={reduce ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/65 to-ink/90" />

        {/* Main content — centered */}
        <div className="relative flex-1 flex items-center justify-center text-center px-5 md:px-10 pt-32 pb-16">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-semibold text-[2.4rem] leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.5rem] max-w-[14ch] mx-auto">
              Ride New Zealand on a premium BMW or Triumph
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-[52ch] mx-auto">
              Motorcycle hire from East Auckland for experienced riders — approved before arrival, ride-ready at collection.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/check-availability"
                variant="primary"
                icon={
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                }
              >
                Check Availability
              </Button>
              <Button
                to="/bikes-pricing"
                variant="white"
                icon={
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="6.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="17.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M6.5 17h11M9 10l2-5h4l2 5H9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <path d="M15 10l1.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                }
              >
                View Bikes & Pricing
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust cards — glass strip at hero bottom */}
        <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 px-6 py-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15"
              >
                <span className="shrink-0 mt-0.5 text-bronze">{item.icon}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-white leading-snug">{item.title}</p>
                  <p className="mt-1 text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-sand py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-[2.75rem] leading-[1.05] tracking-tight text-charcoal">
              A sharper way to hire a motorcycle
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg text-muted leading-relaxed">
              <p>
                Rideworks is built for riders who want more than a basic rental. The bikes are well
                presented. The process is controlled. The pickup is by appointment. The paperwork is
                handled before arrival.
              </p>
              <p>
                This is not a bargain hire fleet, a guided tour company or a generic vehicle-rental
                website. Rideworks is a focused motorcycle hire service for experienced riders who
                value a good bike, a clean process and the freedom to ride self-guided.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIKES PREVIEW — alternating split on light bg */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center">
            <h2 className="font-display font-semibold text-3xl md:text-[2.75rem] leading-[1.05] tracking-tight text-charcoal">
              Choose your ride
            </h2>
            <p className="mt-3 text-base text-muted max-w-[48ch] mx-auto">
              Two motorcycles. Different ride styles. One clear process.
            </p>
          </Reveal>

          <div className="mt-16 space-y-20 md:space-y-28">
            {BIKES.map((bike, i) => {
              const reverse = i % 2 !== 0;
              return (
                <Reveal key={bike.id} delay={0.1}>
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <div className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={bike.image}
                        alt={`${bike.name} motorcycle`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-smooth)] group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Text */}
                    <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                      <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal leading-tight">
                        {bike.name}.
                      </h3>
                      <p className="mt-4 text-base text-muted leading-relaxed max-w-[52ch]">
                        {bike.body}
                      </p>
                      <ul className="mt-7 space-y-3">
                        {bike.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-charcoal/70">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button to={`/bikes-pricing#${bike.id}`} variant="secondary">
                          {bike.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY RIDEWORKS — proof points on charcoal band */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center">
            <h2 className="font-display font-semibold text-3xl md:text-[2.75rem] leading-[1.05] tracking-tight text-white">
              Prepared before you arrive
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-[56ch] mx-auto">
              The best hire experience starts before collection. We review rider suitability, licence details, intended ride, payment and agreement requirements before pickup, so the handover stays calm, professional and ride-ready.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {PROOF_POINTS.map((p, i) => (
              <div key={p.title} className="flex flex-col items-center text-center px-8 md:px-12 py-10 md:py-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/20 text-sm font-display font-semibold text-white/70">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-[28ch]">{p.body}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS SUMMARY — vertical timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

            {/* LEFT — sticky heading + CTA */}
            <Reveal className="lg:sticky lg:top-28">
              <p className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.22em] text-bronze">
                <span className="w-6 h-px bg-bronze inline-block" />
                How It Works
              </p>
              <h2 className="mt-5 font-display font-semibold text-3xl md:text-[2.75rem] leading-[1.05] tracking-tight text-charcoal">
                Approved before arrival. Ride-ready at collection.
              </h2>
              <div className="mt-8">
                <Button to="/how-it-works" variant="primary">
                  See How It Works
                </Button>
              </div>
            </Reveal>

            {/* RIGHT — animated timeline */}
            <div className="relative" ref={timelineRef}>
              {/* Track line (faint) */}
              <div className="absolute left-[19px] top-5 bottom-5 w-px bg-line" aria-hidden />
              {/* Animated fill line */}
              {!reduce && (
                <motion.div
                  className="absolute left-[19px] top-5 w-px bg-bronze origin-top"
                  style={{ scaleY: lineScale, height: 'calc(100% - 40px)' }}
                  aria-hidden
                />
              )}

              <Stagger className="space-y-5" gap={0.08}>
                {PROCESS.map((step, i) => (
                  <div key={step.n} className="relative flex gap-5 items-start">
                    {/* Dot — plain filled circle, no border */}
                    <div className="relative z-10 shrink-0 mt-5 w-10 h-10 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-bronze ring-4 ring-paper" />
                    </div>
                    {/* Card */}
                    <div className="flex-1 rounded-xl border border-line bg-paper p-6">
                      {/* Icon + title in a row */}
                      <div className="flex items-center gap-3">
                        <span className="shrink-0 text-bronze">{PROCESS_ICONS[i]}</span>
                        <h3 className="font-display text-base font-semibold text-charcoal">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </Stagger>
            </div>

          </div>
        </div>
      </section>

      {/* AUCKLAND STARTING POINT — full-width image with right text overlay */}
      <section className="relative overflow-hidden bg-charcoal min-h-[520px] md:min-h-[620px] flex items-center">
        {/* Background image */}
        <img
          src={aucklandImg}
          alt="Rider standing beside a BMW GS motorcycle overlooking New Zealand coastline and winding road"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        {/* Gradient: transparent left → dark right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/30 to-ink/90" />

        {/* Text overlay — pinned to right */}
        <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 flex justify-end py-20 md:py-28">
          <Reveal className="max-w-[480px] text-white">
            <h2 className="font-display font-semibold text-3xl md:text-[2.75rem] leading-[1.05] tracking-tight text-white">
              Start from Auckland. Ride your own route.
            </h2>
            <div className="mt-6 space-y-4 text-base text-white/70 leading-relaxed">
              <p>
                East Auckland is a practical launch point for local rides, Coromandel, Waikato,
                Rotorua, Taupo and wider North Island touring.
              </p>
              <p>
                For experienced riders planning longer trips, South Island hires may be considered by
                prior arrangement, assessed case by case on hire length, experience, route, ferry
                plans, timing and availability.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAVELLER GEAR — split */}
      <section className="bg-sand py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading title="Travelling light?" />
            <div className="mt-6 space-y-5 text-lg text-muted leading-relaxed max-w-[52ch]">
              <p>
                Rideworks can provide limited Traveller Gear Support for approved hires, subject to
                size and availability.
              </p>
              <p>
                Options may include helmet, jacket, wet-weather gear, riding pants and boots. Gloves
                are sold new rather than rented.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/bikes-pricing#gear" variant="primary">
                Ask About Gear Support
              </Button>
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal">
              <img
                src="/gear.jpg"
                alt="Rider with suitcase alongside a BMW GS motorcycle and gear ready for collection"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}

export function FinalCTA({
  title = 'Ready to plan your ride?',
  body = "Send your preferred dates, motorcycle choice and riding experience. We'll confirm availability and next steps.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-bronze-light">
            {PROMISE}
          </p>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-6xl tracking-tight max-w-[16ch] mx-auto leading-[1.03]">
            {title}
          </h2>
          <p className="mt-6 text-lg text-white/65 max-w-[52ch] mx-auto leading-relaxed">{body}</p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/check-availability"
              className="inline-flex items-center gap-2 px-9 py-4 bg-bronze text-white rounded-sm text-base font-medium hover:bg-bronze-dark transition-colors active:translate-y-px"
            >
              Check Availability
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="var(--color-bronze)" fillOpacity="0.14" />
      <path d="M5.5 9.2l2.2 2.2 4.8-4.8" stroke="var(--color-bronze)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dot() {
  return <span className="mt-[7px] shrink-0 h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden />;
}
