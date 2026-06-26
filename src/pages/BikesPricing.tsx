import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { Reveal, Stagger } from '../components/Reveal';
import { SectionHeading } from '../components/Section';
import { FinalCTA } from './Home';
import {
  COMPARISON,
  BMW_DETAIL,
  TRIUMPH_DETAIL,
  GEAR_PACKS,
  REQUIREMENTS,
  BIKES,
  IMAGES,
} from '../data';
import gearImg from '../assets/gear.jpg';

export function BikesPricing() {
  return (
    <>
      <PageHero
        kicker="Bikes & Pricing"
        title="Two motorcycles. Different ride styles. One clear process."
        body="Rideworks is launching with a focused two-bike pilot from East Auckland: a BMW F800 GS for adventure touring and longer-distance hire, and a Triumph Scrambler for shorter scenic rides. Prices are in NZD and include GST unless stated otherwise."
      />

      {/* COMPARISON */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading title="Which bike suits your ride?" />
          <Reveal className="mt-12">
            <div className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="py-4 px-5 font-display text-sm font-medium w-[26%] bg-charcoal text-white">Feature</th>
                    <th className="py-4 px-5 font-display text-sm font-medium text-white" style={{ backgroundColor: '#0066b1' }}>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                        BMW F800 GS
                      </span>
                    </th>
                    <th className="py-4 px-5 font-display text-sm font-medium text-ink" style={{ backgroundColor: '#c49518' }}>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-ink/40" />
                        Triumph Scrambler
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.features.map((row, i) => (
                    <tr key={row.label}>
                      <th className={`py-4 px-5 font-medium text-sm text-charcoal align-top ${i % 2 ? 'bg-paper' : 'bg-sand/50'}`}>{row.label}</th>
                      <td
                        className="py-4 px-5 text-sm text-charcoal/80 align-top"
                        style={{ backgroundColor: i % 2 ? 'rgba(0,102,177,0.07)' : 'rgba(0,102,177,0.13)' }}
                      >{row.bmw}</td>
                      <td
                        className="py-4 px-5 text-sm text-charcoal/80 align-top"
                        style={{ backgroundColor: i % 2 ? 'rgba(196,149,24,0.07)' : 'rgba(196,149,24,0.14)' }}
                      >{row.triumph}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BMW DETAIL */}
      <BikeDetail
        id="bmw"
        accent="var(--color-bmw)"
        badge="BMW"
        name="BMW F800 GS"
        image={BIKES[0].image}
        body="The BMW F800 GS is the core Rideworks touring motorcycle — comfortable, well-equipped and suited to sealed-road touring, weekend escapes, multi-day North Island rides and longer South Island hires by arrangement."
        included={BMW_DETAIL.included}
        pricing={BMW_DETAIL.pricing}
        note={BMW_DETAIL.note}
        cta="Check BMW Availability"
        reverse={false}
        specs={[
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>, label: '2024 Model' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>, label: 'Adventure Touring' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.7"/></svg>, label: 'Givi Luggage' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>, label: 'CarPlay / Android Auto' },
        ]}
      />

      {/* TRIUMPH DETAIL */}
      <BikeDetail
        id="triumph"
        accent="var(--color-triumph)"
        badge="Triumph"
        name="Triumph Scrambler"
        image={BIKES[1].image}
        body="The Triumph Scrambler suits experienced riders who want a relaxed, character-led ride — shorter scenic escapes from East Auckland rather than long-distance touring. Approved road-use conditions apply."
        included={TRIUMPH_DETAIL.included}
        pricing={TRIUMPH_DETAIL.pricing}
        note={TRIUMPH_DETAIL.note}
        cta="Check Scrambler Availability"
        reverse
        specs={[
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>, label: 'Classic Scrambler' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7"/></svg>, label: 'Scenic Rides' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.7"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>, label: 'Experienced Riders' },
          { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 4.42-3.13 8.56-7 9.93C8.13 20.56 5 16.42 5 12V6l7-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: 'Road Hire Only' },
        ]}
      />

      {/* GEAR */}
      <section id="gear" className="bg-charcoal text-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading
            title="Traveller Gear Support"
            intro="Arriving without your full riding kit? Rideworks can provide limited gear support for approved hires, subject to sizing and availability. Gear is designed to support the motorcycle hire, not operate as a standalone gear-rental service."
            tone="light"
          />
          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GEAR_PACKS.map((pack) => (
              <div key={pack.name} className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={gearImg}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display font-semibold text-sm text-white leading-snug">{pack.name}</p>
                  <p className="mt-1.5 text-xs text-white/60 leading-relaxed">{pack.includes}</p>
                  <p className="mt-3 font-display text-sm font-semibold text-bronze-light">{pack.price}</p>
                </div>
              </div>
            ))}
          </Stagger>
          <p className="mt-8 text-sm text-white/45 italic max-w-[60ch]">
            For hygiene and safety reasons, gloves are sold new rather than rented.
          </p>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-[30%_70%] gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading
              title="Who Rideworks is for"
              intro="Rideworks is for experienced motorcycle riders who hold the right licence and are comfortable riding motorcycles of similar size, weight and power."
            />
            <div className="mt-8 rounded-lg border border-line bg-sand/50 p-7">
              <h3 className="font-display text-lg font-semibold text-charcoal">Insurance, bond and excess</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Commercial rental insurance, bond/excess requirements and hire terms apply to every
                Rideworks hire. Pickup is confirmed once the required licence/ID checks, payment, bond
                or excess authorisation and hire agreement are complete. Final insurance and excess
                wording will be confirmed before launch.
              </p>
            </div>
          </div>
          <Stagger className="grid grid-cols-1 gap-y-3 lg:pt-2" gap={0.05}>
            {REQUIREMENTS.map((req) => (
              <div key={req} className="flex items-start gap-3 border-b border-line pb-3">
                <svg className="shrink-0 mt-[1px]" width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="16" height="16" rx="3.5" stroke="#b58440" fill="rgba(181,132,64,0.08)"/>
                  <path d="M4.5 8.5l2.5 2.5L12.5 5" stroke="#b58440" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-charcoal/80 leading-snug">{req}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCTA title="Know which bike you want?" />
    </>
  );
}

function PageHero({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <img
        src={IMAGES.collection}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <p className="font-display text-[11px] uppercase tracking-[0.22em] text-bronze-light">{kicker}</p>
        <h1 className="mt-5 font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[1.04] max-w-[18ch]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-[60ch]">{body}</p>
        <div className="mt-9">
          <Button to="/check-availability" variant="primary">
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
}

interface BikeDetailProps {
  id: string;
  accent: string;
  badge: string;
  name: string;
  image: string;
  body: string;
  included: string[];
  pricing: { length: string; price: string }[];
  note: string;
  cta: string;
  reverse: boolean;
  specs?: { icon: ReactNode; label: string }[];
  colorScheme?: 'blue' | 'amber';
}

function BikeDetail(props: BikeDetailProps) {
  const highlightPricing = props.pricing.slice(0, 3);
  const isBlue = props.colorScheme === 'blue';
  const isAmber = props.colorScheme === 'amber';

  const cardBg        = isBlue ? '#0066b1' : isAmber ? '#c49518' : undefined;
  const headingCls    = isBlue ? 'text-white' : isAmber ? 'text-ink' : 'text-charcoal';
  const bodyCls       = isBlue ? 'text-white/75' : isAmber ? 'text-ink/70' : 'text-muted';
  const labelCls      = isBlue ? 'text-white' : isAmber ? 'text-ink' : 'text-charcoal';
  const badgeCls      = isBlue ? 'bg-white/20 text-white border border-white/30' : isAmber ? 'bg-ink/15 text-ink border border-ink/20' : 'border-line bg-paper text-charcoal border';
  const pricingBorder = isBlue ? 'border-white/25 divide-white/25' : isAmber ? 'border-ink/20 divide-ink/20' : 'border-line divide-line';
  const pricingCellBg = isBlue ? 'bg-white/10' : isAmber ? 'bg-ink/10' : 'bg-sand/40';
  const priceLblCls   = isBlue ? 'text-white/60' : isAmber ? 'text-ink/60' : 'text-muted';
  const priceCls      = isBlue ? 'text-white' : isAmber ? 'text-ink' : 'text-charcoal';
  const noteCls       = isBlue ? 'text-white/50' : isAmber ? 'text-ink/50' : 'text-muted';
  const pillBadgeCls  = isBlue ? 'bg-white text-[#0066b1]' : isAmber ? 'bg-ink text-white' : 'text-white';
  const pillBadgeBg   = (!isBlue && !isAmber) ? props.accent : undefined;
  const btnVariant    = isBlue ? 'white' as const : 'primary' as const;
  const includedDot   = isBlue ? '#ffffff' : isAmber ? '#1a1a1a' : props.accent;
  const includedCls   = isBlue ? 'text-white/70' : isAmber ? 'text-ink/70' : 'text-charcoal/70';

  return (
    <section id={props.id} className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <div
            className={`flex flex-col ${props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden rounded-2xl border border-line shadow-sm`}
            style={cardBg ? { backgroundColor: cardBg } : { backgroundColor: '#ffffff' }}
          >
            {/* Text side */}
            <div className="flex flex-col justify-between flex-1 p-8 md:p-12">
              <div>
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-5 ${pillBadgeCls}`}
                  style={pillBadgeBg ? { backgroundColor: pillBadgeBg } : undefined}
                >
                  {props.badge}
                </span>
                <h2 className={`font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.06] tracking-tight ${headingCls}`}>
                  {props.name}
                </h2>
                <p className={`mt-4 text-base leading-relaxed max-w-[52ch] ${bodyCls}`}>{props.body}</p>

                {props.specs && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {props.specs.map((s, i) => (
                      <span key={i} className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm ${badgeCls}`}>
                        <span className="shrink-0 opacity-70">{s.icon}</span>
                        {s.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className={`font-display font-semibold text-sm mb-3 ${labelCls}`}>Pricing Terms</p>
                <div className={`grid grid-cols-3 divide-x border rounded-xl overflow-hidden ${pricingBorder}`}>
                  {highlightPricing.map((row) => (
                    <div key={row.length} className={`p-4 md:p-5 ${pricingCellBg}`}>
                      <p className={`text-xs leading-snug ${priceLblCls}`}>{row.length}</p>
                      <p className={`mt-2 font-display font-semibold text-base md:text-lg leading-tight ${priceCls}`}>{row.price}</p>
                    </div>
                  ))}
                </div>
                {props.note && (
                  <p className={`mt-3 text-xs italic leading-relaxed max-w-[52ch] ${noteCls}`}>{props.note}</p>
                )}
                <Button to="/check-availability" variant={btnVariant} className="mt-5 w-full justify-center">
                  {props.cta}
                </Button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative lg:w-[45%] aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={props.image}
                alt={`${props.name} motorcycle`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              {props.included.length > 0 && (
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {props.included.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-medium text-white/90 bg-ink/55 backdrop-blur-sm rounded-full border border-white/15 leading-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
