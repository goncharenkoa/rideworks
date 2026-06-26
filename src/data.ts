// All site content, ported from the Rideworks Stage 1 copy document.

import _bmw from './assets/bike-bmw.jpg';
import _triumph from './assets/bike-triumph.jpg';
import _collection from './assets/collection.jpg';

export const PROMISE = 'Approved before arrival. Ride-ready at collection.';

export const IMAGES = {
  bmw: _bmw,
  triumph: _triumph,
  collection: _collection,
};

export const TRUST_POINTS = [
  'Premium BMW and Triumph motorcycles',
  'Experienced riders only',
  'Self-guided New Zealand road rides',
  'East Auckland collection by appointment',
  'Longer hires considered by arrangement',
  'Licence, ID, payment and agreement completed before pickup',
];

export const BIKES = [
  {
    id: 'bmw',
    name: 'BMW F800 GS',
    tag: 'Adventure-touring hire for New Zealand road rides.',
    accent: 'var(--color-bmw)',
    badge: 'BMW',
    body: 'A premium BMW adventure motorcycle set up for sealed-road touring, weekend escapes, multi-day North Island rides and longer South Island hires by arrangement.',
    highlights: [
      'Givi luggage',
      'Crash bars',
      'Auxiliary lights',
      'CHIGEE Apple CarPlay / Android Auto',
      'Phone charging',
      'Best for touring and longer-distance rides',
    ],
    cta: 'View BMW Pricing',
    image: IMAGES.bmw,
  },
  {
    id: 'triumph',
    name: 'Triumph Scrambler',
    tag: 'Classic character for shorter scenic escapes.',
    accent: 'var(--color-triumph)',
    badge: 'Triumph',
    body: 'A distinctive Triumph for experienced riders wanting a shorter, relaxed, self-guided ride from East Auckland.',
    highlights: [
      'Classic scrambler character',
      'Shorter ride focus',
      'Scenic-road feel',
      'Appointment pickup',
      'Approved road-use conditions apply',
      'No off-road riding',
    ],
    cta: 'View Scrambler Pricing',
    image: IMAGES.triumph,
  },
];

export const PROOF_POINTS = [
  {
    title: 'The right rider',
    body: 'Experienced riders only, with licence and suitability checks before hire.',
  },
  {
    title: 'The right bike',
    body: 'Premium motorcycles selected for enjoyable self-guided riding from Auckland.',
  },
  {
    title: 'The right process',
    body: 'Clear approval steps before pickup, then a focused handover at collection.',
  },
];

export const PROCESS = [
  {
    n: 1,
    title: 'Check availability',
    body: 'Send your preferred dates, motorcycle choice, licence details and riding experience.',
  },
  {
    n: 2,
    title: 'Rider review',
    body: 'We confirm whether the hire is suitable based on rider experience, licence status, intended ride and bike availability.',
  },
  {
    n: 3,
    title: 'Complete pre-hire steps',
    body: 'Licence and ID checks, payment, bond or excess authorisation and hire agreement are completed before pickup.',
  },
  {
    n: 4,
    title: 'Collect by appointment',
    body: 'Pickup is from East Auckland. We complete final ID confirmation, condition photos, accessory check and controls briefing.',
  },
  {
    n: 5,
    title: 'Ride self-guided',
    body: 'You ride independently within the agreed hire period, approved riding area and permitted use conditions.',
  },
  {
    n: 6,
    title: 'Return and final check',
    body: 'We inspect the motorcycle, check accessories and finalise the hire.',
  },
];

export const COMPARISON = {
  features: [
    { label: 'Best for', bmw: 'Touring, weekend escapes and longer-distance road rides', triumph: 'Shorter scenic rides and relaxed escapes' },
    { label: 'Ride style', bmw: 'Premium adventure-touring', triumph: 'Classic scrambler character' },
    { label: 'Typical hire', bmw: '1 to 7+ days', triumph: 'Short hire, day hire or by arrangement' },
    { label: 'South Island suitability', bmw: 'Considered for longer hires by arrangement', triumph: 'Not the primary use case' },
    { label: 'Luggage', bmw: 'Touring luggage available', triumph: 'Light luggage options subject to setup' },
    { label: 'Road use', bmw: 'Sealed public roads unless otherwise approved', triumph: 'Approved road-use conditions apply' },
    { label: 'Rider fit', bmw: 'Experienced riders comfortable with larger adventure bikes', triumph: 'Experienced riders comfortable with classic-style motorcycles' },
  ],
};

export const BMW_DETAIL = {
  included: [
    '2024 BMW F800 GS',
    'Givi luggage',
    'Crash bars',
    'Auxiliary lights',
    'CHIGEE Apple CarPlay / Android Auto',
    'Phone charging',
    'Pre-hire rider review',
    'Appointment-based handover',
  ],
  pricing: [
    { length: '1 day', price: 'NZ$295 per day' },
    { length: '2 to 3 days', price: 'NZ$255 per day' },
    { length: '4 to 6 days', price: 'NZ$235 per day' },
    { length: '7+ days', price: 'NZ$215 per day or quote' },
    { length: 'Longer South Island hire', price: 'By arrangement' },
  ],
  note: 'Longer-distance and South Island hires are assessed case by case based on duration, rider experience, timing, route, ferry travel, bike availability and hire conditions.',
};

export const TRIUMPH_DETAIL = {
  included: [
    'Triumph Scrambler',
    'Classic scrambler riding character',
    'Pre-hire rider review',
    'Appointment-based handover',
    'Condition record before and after hire',
    'Optional Traveller Gear Support',
  ],
  pricing: [
    { length: 'Short ride / half-day style hire', price: 'From NZ$249' },
    { length: '1 day self-guided hire', price: 'From NZ$295' },
    { length: '2+ days', price: 'By quote' },
    { length: 'Future Scrambler Scenic Day', price: 'Register interest' },
  ],
  note: 'The Scrambler is offered first as a self-guided road hire option. A future Scrambler Scenic Day format may be developed later, subject to route testing, insurance confirmation and demand.',
};

export const GEAR_PACKS = [
  { name: 'Essential Gear Pack', includes: 'Helmet, disposable liner, riding jacket', price: 'NZ$95 per hire' },
  { name: 'Weather Gear Pack', includes: 'Helmet, liner, jacket, wet-weather gear', price: 'NZ$145 per hire' },
  { name: 'Touring Gear Pack', includes: 'Helmet, liner, jacket, wet-weather gear, riding pants', price: 'NZ$195 per hire' },
  { name: 'Boot hire', includes: 'Riding boots where available', price: 'NZ$50 per hire' },
  { name: 'Gloves', includes: 'New RST Core gloves available for purchase', price: 'Confirmed at hire' },
];

export const REQUIREMENTS = [
  'Full motorcycle licence suitable for riding in New Zealand',
  'Minimum rider age applies',
  'Suitable recent riding experience required',
  'Licence and ID verification required',
  'Payment and bond/excess authorisation required',
  'Signed hire agreement required',
  'Approved riders only',
  'Agreed use conditions apply',
];

export const FAQS = [
  { q: 'Where is pickup?', a: 'Pickup is from East Auckland by appointment. Exact pickup details are confirmed with approved riders.' },
  { q: 'Do you offer airport pickup or delivery?', a: 'Not at Stage 1. Rideworks is launching with East Auckland appointment-based collection only.' },
  { q: 'Do you offer one-way hire?', a: 'Not at Stage 1. Rideworks is launching with East Auckland collection and return. Longer South Island hires may be considered, but the motorcycle must normally be returned to the agreed Rideworks return location unless another arrangement is confirmed in writing.' },
  { q: 'Can I take the bike to the South Island?', a: 'Yes, South Island hires may be considered for longer BMW F800 GS bookings by prior arrangement. These hires are assessed case by case based on rider experience, hire length, route, ferry travel, timing, bike availability, insurance conditions and return arrangements. South Island travel must be discussed and approved before the hire is confirmed.' },
  { q: 'Can I book instantly online?', a: 'Not yet. Rideworks uses a screened availability request so we can confirm rider suitability, licence requirements and hire conditions before accepting a booking.' },
  { q: 'What licence do I need?', a: 'You need a current full motorcycle licence suitable for riding the motorcycle in New Zealand. International riders may need an International Driving Permit or certified English translation.' },
  { q: 'Do I need experience?', a: 'Yes. Rideworks is for experienced riders with suitable recent experience on motorcycles of similar size, weight and power.' },
  { q: 'Can I ride off-road?', a: 'No. Rideworks motorcycles are not available for off-road riding, trail riding, beaches, riverbeds, farm tracks, forestry roads, closed roads or unformed roads.' },
  { q: 'Can I ride on gravel roads?', a: 'Only if specifically approved in writing before the hire. Approved road-use conditions apply.' },
  { q: 'Is insurance included?', a: 'Commercial rental insurance arrangements apply, subject to insurer terms, conditions, exclusions and excesses. Final wording will be confirmed before launch.' },
  { q: 'Is there a bond or excess authorisation?', a: 'Yes. A bond or excess authorisation is required before pickup.' },
  { q: 'Can I hire riding gear?', a: 'Limited Traveller Gear Support is available subject to size and availability. Gloves are sold new rather than rented.' },
  { q: 'Can someone else ride the motorcycle?', a: 'Only approved riders named and accepted before the hire may ride, move or control the motorcycle.' },
  { q: 'What if the bike breaks down?', a: 'Stop when safe and contact Rideworks. Roadside assistance and recovery arrangements are subject to provider terms, bike location and the circumstances of the incident.' },
  { q: 'What happens if I damage the bike?', a: 'Any drop, tip-over, accident or damage must be reported. Excess, repair, recovery or uninsured costs may apply depending on the hire terms and circumstances.' },
  { q: 'Can I take a passenger?', a: 'Passenger use may be allowed if approved before hire and suitable for the motorcycle, route and rider experience.' },
];

export const COLLECTION_STEPS = [
  'Final ID check',
  'Motorcycle condition photos and video',
  'Fuel and odometer record',
  'Accessory and luggage check',
  'Controls briefing',
  'Return process explanation',
  'Key handover',
];

export const CHECKLIST = [
  'Full motorcycle licence',
  'Suitable recent riding experience',
  'Rider approval required',
  'Bond/excess authorisation required',
  'Hire terms and insurance conditions apply',
  'Off-road riding is not permitted',
];

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Bikes & Pricing', to: '/bikes-pricing' },
  { label: 'How It Works', to: '/how-it-works' },
];
