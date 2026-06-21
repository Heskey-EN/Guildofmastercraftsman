// Central site data — structural facts and placeholders.
// Prose/marketing copy lives alongside in the page components; replace the
// [PLACEHOLDER] values below with the client's real details before launch.

export const BRAND = {
  name: 'Guild of Master Craftsman',
  shortName: 'The Guild',
  tagline: 'Master craftsmen for every trade',
  established: '[YEAR]',
}

export const CONTACT = {
  phone: '07805 070450',
  phoneHref: 'tel:+447805070450',
  email: 'dea49.info@outlook.com',
  emailHref: 'mailto:dea49.info@outlook.com',
  area: 'across the UK',
  addressLines: ['[Street address]', '[Town]', '[County]', '[Postcode]'],
  hours: [
    { days: 'Monday – Friday', time: '8:00am – 6:00pm' },
    { days: 'Saturday', time: '9:00am – 1:00pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'The Guild', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

// The 18 headline trades — the "assay panel" of stamps. Flagship trades are
// struck as mini wax seals; the rest as gold lozenge punches.
export const TRADES = [
  { name: 'Extensions', icon: 'extension', flagship: true },
  { name: 'Loft Conversions', icon: 'loft' },
  { name: 'Renovations', icon: 'renovation', flagship: true },
  { name: 'New Builds', icon: 'newbuild', flagship: true },
  { name: 'Structural Work', icon: 'structural' },
  { name: 'Brickwork & Masonry', icon: 'brickwork' },
  { name: 'Roofing', icon: 'roofing' },
  { name: 'Carpentry & Joinery', icon: 'carpentry' },
  { name: 'Plastering & Rendering', icon: 'plastering' },
  { name: 'Kitchens', icon: 'kitchen' },
  { name: 'Bathrooms', icon: 'bathroom' },
  { name: 'Electrics', icon: 'electrics' },
  { name: 'Plumbing & Heating', icon: 'plumbing' },
  { name: 'Tiling', icon: 'tiling' },
  { name: 'Decorating', icon: 'decorating' },
  { name: 'Flooring', icon: 'flooring' },
  { name: 'Landscaping & Groundworks', icon: 'landscaping' },
  { name: 'Heritage & Restoration', icon: 'heritage', flagship: true },
]

// Grouped services for the Services page. `id` matches the copy section id;
// `descriptor` is the one-line ledger summary.
export const SERVICES = [
  { slug: 'extensions-lofts', id: 'extensions-lofts', title: 'Extensions & Loft Conversions', icon: 'extension', descriptor: 'More space and light, built to feel original to the home.' },
  { slug: 'renovations', id: 'renovations', title: 'Renovations & Refurbishments', icon: 'renovation', descriptor: 'Tired properties brought back to life, inside and out.' },
  { slug: 'new-builds', id: 'new-builds', title: 'New Builds & Structural', icon: 'structural', descriptor: 'Sound structure and bespoke homes, from the ground up.' },
  { slug: 'brickwork', id: 'brickwork', title: 'Brickwork & Masonry', icon: 'brickwork', descriptor: 'Crisp, characterful brick, block and stonework.' },
  { slug: 'roofing', id: 'roofing', title: 'Roofing', icon: 'roofing', descriptor: 'Re-roofs, repairs and leadwork that keep the weather out.' },
  { slug: 'carpentry', id: 'carpentry', title: 'Carpentry & Joinery', icon: 'carpentry', descriptor: 'First, second-fix and bespoke joinery, cut by hand.' },
  { slug: 'plastering', id: 'plastering', title: 'Plastering & Rendering', icon: 'plastering', descriptor: 'Flawless internal finishes and durable external render.' },
  { slug: 'kitchens-bathrooms', id: 'kitchens-bathrooms', title: 'Kitchens & Bathrooms', icon: 'kitchen', descriptor: 'Beautifully planned rooms, finished to the millimetre.' },
  { slug: 'electrics', id: 'electrics', title: 'Electrics', icon: 'electrics', descriptor: 'Certified installation, rewiring and testing.' },
  { slug: 'plumbing-heating', id: 'plumbing-heating', title: 'Plumbing & Heating', icon: 'plumbing', descriptor: 'Efficient heating, plumbing and hot water, properly specified.' },
  { slug: 'finishes', id: 'finishes', title: 'Tiling, Decorating & Flooring', icon: 'tiling', descriptor: 'The finishing trades, treated as seriously as the structure.' },
  { slug: 'landscaping', id: 'landscaping', title: 'Landscaping & Groundworks', icon: 'landscaping', descriptor: 'Drainage, driveways, patios and grounds that complete it.' },
  { slug: 'heritage', id: 'heritage', title: 'Heritage & Restoration', icon: 'heritage', descriptor: 'Sympathetic restoration using traditional methods.' },
]

// Portfolio — "The Register". Locations/years are placeholders.
export const PROJECTS = [
  {
    title: 'Victorian Rear Extension',
    category: 'Extensions & Structural',
    location: '[Town]',
    year: '2025',
    motif: 0,
    body: 'A full-width rear extension to a Victorian terrace, opening a dark galley layout into a light-filled kitchen and dining space, with brickwork matched to the original elevation.',
  },
  {
    title: 'Barn Conversion',
    category: 'Conversions & Restoration',
    location: '[Village]',
    year: '2024',
    motif: 2,
    body: 'A redundant agricultural barn sensitively converted into a four-bedroom home, retaining the original timber frame and exposed beams as the centrepiece.',
  },
  {
    title: 'Full House Refurbishment',
    category: 'Renovation & Refurbishment',
    location: '[City]',
    year: '2024',
    motif: 3,
    body: 'A whole-house renovation taken back to brick — completely rewired, re-plumbed and replastered, then finished to a high specification under a single programme.',
  },
  {
    title: 'Heritage Roof Restoration',
    category: 'Roofing & Heritage',
    location: '[Parish]',
    year: '2023',
    motif: 1,
    body: 'The careful restoration of a slate roof on a listed property, with reclaimed materials sourced to match the original and traditional leadwork renewed by hand.',
  },
  {
    title: 'Bespoke Kitchen',
    category: 'Kitchens & Joinery',
    location: '[Town]',
    year: '2025',
    motif: 3,
    body: 'A handcrafted in-frame kitchen fitted to the proportions of a period home, drawing joinery, electrics, plumbing and tiling into one seamlessly finished space.',
  },
  {
    title: 'Loft Conversion with En-Suite',
    category: 'Loft Conversions',
    location: '[Town]',
    year: '2024',
    motif: 1,
    body: 'A dormer loft conversion creating a generous master bedroom and en-suite within previously unused roof space, completed with minimal disruption below.',
  },
  {
    title: 'New-Build Family Home',
    category: 'New Builds & Groundworks',
    location: '[Village]',
    year: '2023',
    motif: 0,
    body: 'A detached family home delivered from groundworks to completion — foundations, masonry, roofing, first and second fix, and full external landscaping.',
  },
  {
    title: 'Period Property Restoration',
    category: 'Restoration & Masonry',
    location: '[Town]',
    year: '2022',
    motif: 2,
    body: 'The restoration of a Georgian townhouse, including lime plastering, sash window repair and the renewal of decorative masonry to its original detail.',
  },
]

export const ACCREDITATIONS = [
  'Federation of Master Builders',
  'TrustMark Registered',
  'NICEIC Approved',
  'Gas Safe Registered',
  'CHAS Accredited',
  'Fully Insured & Guaranteed',
]

export const STATS = [
  { value: '25+', label: 'Years of craftsmanship' },
  { value: '600+', label: 'Projects completed' },
  { value: '18', label: 'Trades under one roof' },
  { value: '100%', label: 'Workmanship guaranteed' },
]
