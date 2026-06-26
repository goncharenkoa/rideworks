import { useState } from 'react';
import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/Section';
import { CHECKLIST, PROMISE } from '../data';

export function CheckAvailability() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-16 md:pt-36 md:pb-20">
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-bronze-light">Check Availability</p>
          <h1 className="mt-5 font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.04] max-w-[18ch]">
            Tell us your dates, motorcycle choice and planned ride
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-[62ch]">
            Rideworks uses a screened enquiry process rather than instant booking. This helps confirm
            availability, rider suitability, licence requirements, intended route and hire conditions
            before accepting a booking. Submitting this form does not confirm a booking.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* BEFORE YOU SUBMIT */}
          <Reveal className="lg:sticky lg:top-28">
            <SectionHeading title="Before you submit" />
            <p className="mt-5 text-base text-muted leading-relaxed">
              Rideworks is designed for experienced riders. Before pickup, approved riders complete
              licence/ID checks, payment, bond or excess authorisation and a signed hire agreement.
            </p>
            <ul className="mt-7 space-y-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-line pb-3.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  <span className="text-sm text-charcoal/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 font-display text-sm font-medium text-bronze">{PROMISE}</p>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <AvailabilityForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  'w-full px-4 py-3 bg-paper border border-line rounded-sm text-charcoal placeholder:text-muted/70 focus:outline-none focus:border-bronze focus:ring-2 focus:ring-bronze/20 transition-colors';
const labelCls = 'block text-sm font-medium text-charcoal mb-2';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function Fieldset({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-7">
      <legend className="font-display text-base font-semibold text-bronze mb-5">{title}</legend>
      <div className="space-y-5">{children}</div>
    </fieldset>
  );
}

function AvailabilityForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false);
  const [gearOpen, setGearOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      setError(true);
      return;
    }
    setError(false);
    // Stage 1 pilot: no backend wired yet. Log the payload and show confirmation.
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log('Availability request:', data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-line bg-sand/50 p-8 md:p-12"
      >
        <div className="h-12 w-12 rounded-full bg-bronze/15 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="var(--color-bronze)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-charcoal">
          Thanks, your request has been received.
        </h2>
        <p className="mt-4 text-base text-muted leading-relaxed">
          We'll review your preferred dates, motorcycle choice and rider details, then respond with
          availability and next steps.
        </p>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          A booking is confirmed only once rider approval, payment, bond/excess authorisation and the
          hire agreement are complete.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setAgree(false);
          }}
          className="mt-7 text-sm font-medium text-bronze hover:text-bronze-dark transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-9">
      <Fieldset title="Contact details">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Name"><input name="name" required className={inputCls} placeholder="Your name" /></Field>
          <Field label="Email"><input name="email" type="email" required className={inputCls} placeholder="you@email.com" /></Field>
          <Field label="Phone"><input name="phone" type="tel" required className={inputCls} placeholder="+64 21 000 0000" /></Field>
          <Field label="Country of residence"><input name="country" className={inputCls} placeholder="New Zealand" /></Field>
        </div>
      </Fieldset>

      <Fieldset title="Hire details">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Preferred pickup date"><input name="pickup" type="date" required className={inputCls} /></Field>
          <Field label="Preferred return date"><input name="return" type="date" required className={inputCls} /></Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Preferred motorcycle">
            <select name="motorcycle" required className={inputCls} defaultValue="">
              <option value="" disabled>Select a motorcycle</option>
              <option>BMW F800 GS</option>
              <option>Triumph Scrambler</option>
              <option>Both / not sure</option>
            </select>
          </Field>
          <Field label="Intended ride or destination">
            <select name="destination" className={inputCls} defaultValue="">
              <option value="" disabled>Select a destination</option>
              <option>Local Auckland ride</option>
              <option>North Island touring</option>
              <option>South Island travel</option>
              <option>Not yet decided</option>
              <option>Other</option>
            </select>
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Number of riders"><input name="riders" type="number" min={1} defaultValue={1} className={inputCls} /></Field>
          <Field label="Passenger required?">
            <select name="passenger" className={inputCls} defaultValue="No">
              <option>No</option>
              <option>Yes</option>
            </select>
          </Field>
        </div>
      </Fieldset>

      <Fieldset title="Licence and experience">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Licence country"><input name="licenceCountry" className={inputCls} placeholder="New Zealand" /></Field>
          <Field label="Licence type / class"><input name="licenceClass" className={inputCls} placeholder="Full motorcycle" /></Field>
        </div>
        <Field label="How long have you held a full motorcycle licence?">
          <select name="licenceYears" className={inputCls} defaultValue="">
            <option value="" disabled>Select</option>
            <option>1 to 3 years</option>
            <option>3 to 5 years</option>
            <option>5 to 10 years</option>
            <option>10+ years</option>
          </select>
        </Field>
        <Field label="Recent riding experience">
          <textarea name="experience" rows={3} className={inputCls} placeholder="Describe your recent riding experience and the motorcycles you currently ride." />
        </Field>
        <Field label="Have you ridden motorcycles of similar size, weight and power?">
          <select name="similar" className={inputCls} defaultValue="Yes">
            <option>Yes</option>
            <option>No</option>
          </select>
        </Field>
      </Fieldset>

      {/* Gear — collapsed by default */}
      <fieldset className="border-t border-line pt-7">
        <button
          type="button"
          onClick={() => setGearOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 text-left"
          aria-expanded={gearOpen}
        >
          <span className="font-display text-base font-semibold text-bronze">
            Traveller Gear Support <span className="text-muted font-normal">(optional)</span>
          </span>
          <span className={`text-bronze transition-transform duration-300 ${gearOpen ? 'rotate-45' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </button>
        {gearOpen && (
          <div className="mt-5 space-y-5">
            <Field label="Do you require Traveller Gear Support?">
              <select name="gear" className={inputCls} defaultValue="No">
                <option>No</option>
                <option>Helmet and jacket</option>
                <option>Wet-weather gear</option>
                <option>Riding pants</option>
                <option>Boots</option>
                <option>New gloves for purchase</option>
                <option>Not sure</option>
              </select>
            </Field>
            <Field label="Gear fit preference">
              <select name="gearFit" className={inputCls} defaultValue="No preference">
                <option>Men's</option>
                <option>Women's</option>
                <option>No preference</option>
                <option>Not sure</option>
              </select>
            </Field>
          </div>
        )}
      </fieldset>

      <Fieldset title="Message">
        <Field label="Anything else we should know?">
          <textarea name="message" rows={4} className={inputCls} placeholder="Optional notes about your ride, timing or experience." />
        </Field>
      </Fieldset>

      {/* Acknowledgement */}
      <div className="rounded-lg border border-line bg-sand/50 p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.target.checked);
              if (e.target.checked) setError(false);
            }}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-bronze)]"
          />
          <span className="text-xs text-muted leading-relaxed">
            I understand that submitting this form does not confirm a booking. Rider approval,
            licence/ID checks, insurance terms, payment, bond/excess authorisation and a signed hire
            agreement must be completed before pickup. I also understand that South Island travel,
            ferry travel, longer-distance hire and any non-standard route must be discussed and
            approved before the hire is confirmed.
          </span>
        </label>
        {error && (
          <p className="mt-3 text-xs font-medium text-[#b3261e]">
            Please acknowledge the hire conditions to continue.
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-bronze text-white rounded-sm text-base font-medium hover:bg-bronze-dark transition-colors active:translate-y-px"
      >
        Submit Availability Request
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
