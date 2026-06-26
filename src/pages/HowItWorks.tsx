import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../components/Button';
import { Reveal, Stagger } from '../components/Reveal';
import { SectionHeading } from '../components/Section';
import { FinalCTA } from './Home';
import { PROCESS, COLLECTION_STEPS, FAQS, PROMISE, IMAGES } from '../data';

export function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden">
        <img src={IMAGES.road} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-bronze-light">How It Works</p>
          <h1 className="mt-5 font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.04] max-w-[16ch]">
            A clear hire process for experienced riders
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-[60ch]">
            Rideworks completes the important checks before arrival, then keeps collection focused on
            the bike, condition record and ride briefing. {PROMISE}
          </p>
          <div className="mt-9">
            <Button to="/check-availability" variant="primary">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading title="The Rideworks hire process" />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-lg overflow-hidden border border-line">
            {PROCESS.map((step) => (
              <div key={step.n} className="bg-paper p-8 md:p-9">
                <span className="font-display text-4xl font-semibold text-bronze">
                  {String(step.n).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-sand py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeading
              title="Less counter time. More ride time."
              intro="Because the main approval steps are completed before arrival, pickup can stay focused and practical."
            />
          </div>
          <Stagger className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 lg:pt-2" gap={0.05}>
            {COLLECTION_STEPS.map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-line pb-3.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span className="text-sm text-charcoal/80 leading-snug">{item}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <SectionHeading title="Frequently asked questions" align="center" />
          <div className="mt-12">
            <FaqList />
          </div>
        </div>
      </section>

      <FinalCTA title="Still have a question?" body="Send your preferred dates, bike choice and riding experience. We'll confirm whether the hire is suitable and explain the next steps." />
    </>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={faq.q} delay={Math.min(i, 6) * 0.03}>
            <div className="rounded-lg border border-line bg-paper overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 hover:bg-sand/40 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base md:text-lg font-medium text-charcoal">{faq.q}</span>
                <span className={`shrink-0 text-bronze transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
