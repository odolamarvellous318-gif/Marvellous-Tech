# Freelance Portfolio Platform — Design Direction

## Three Initial Directions

### Theme Name: Soft Editorial Studio
Very brief intro: A warm, print-inspired portfolio that treats the freelancer's work like a considered magazine feature: tactile paper tones, expressive serif headlines, and generous margins. It feels personal, articulate, and quietly premium.
Probability: 0.07

### Theme Name: Signal / Studio OS
Very brief intro: A precise, monochrome portfolio with electric accents, modular metadata, and motion-led project browsing. It feels technical and confident, but is deliberately restrained rather than cyberpunk.
Probability: 0.03

### Theme Name: Gallery After Hours
Very brief intro: A dark, cinematic portfolio that frames every project like an exhibition piece, with deep charcoal fields, sharp type, and luminous image moments. It feels dramatic, art-directed, and immersive.
Probability: 0.08

## Chosen Direction: Soft Editorial Studio

### Design Movement
Contemporary editorial design with references to independent print magazines, Swiss poster composition, and tactile studio stationery.

### Core Principles
1. Make the work the protagonist: copy and navigation should guide the eye toward selected projects without competing with them.
2. Use asymmetry as a sign of authorship: offset columns, editorial rails, and deliberate whitespace should replace generic centered hero layouts.
3. Balance warmth with precision: paper-toned surfaces and ink-black type are paired with one vivid signature color and fine rules.
4. Treat every interaction as a small piece of studio craft: fast, quiet, and legible with just enough movement to communicate state.

### Color Philosophy
The base is a warm parchment (#F3EFE7) rather than stark white, creating the feeling of a physical folio. Ink (#171714) gives strong reading contrast. Clay (#D9674E) is the ownable signature color: energetic enough for calls to action and highlights, but earthy enough to feel human and crafted. A muted sage (#AAB7A1) and soft blue-gray (#A8B9C6) support project accents without turning the page into a rainbow.

### Layout Paradigm
A full-width editorial canvas with a persistent, low-profile top rail and sections built from offset columns. The hero pairs a large typographic statement on the left with a layered visual workspace on the right. Project cards alternate between wide feature strips and compact side notes, like spreads in a design annual.

### Signature Elements
1. A clay-red circular cursor badge / availability marker that appears beside key studio details.
2. Hairline rules, folio numbers, and small uppercase metadata labels that make each section feel catalogued.
3. Layered paper cards with slight rotation and shadow, used sparingly around the hero visual and case-study tiles.

### Interaction Philosophy
Interactions are direct and editorial: navigation scrolls to a section, project tiles lift and reveal a short descriptor, and CTAs use clear verbs. Hover states should feel like handling a printed card—small lift, color shift, and underline—not a noisy animation.

### Animation
Use an initial staggered fade-and-rise for hero copy and project cards, capped at 260ms per element. Use transform and opacity only for motion. Project images scale by 1.025 on hover, while metadata stays fixed. Respect prefers-reduced-motion and remove nonessential entrance effects when requested.

### Typography System
Display: Fraunces, 500–600, used for the hero statement, section titles, and project names. Body/UI: DM Sans, 400–600, used for paragraphs, labels, navigation, and buttons. Uppercase metadata uses DM Sans at 11–12px with 0.14em tracking. Headlines should use tight line-height around 0.95–1.05; body copy should use 1.55–1.7.

### Brand Essence
An independent creative partner for thoughtful founders and teams who need work that looks clear, feels human, and moves projects forward. Personality: observant, warm, exacting.

### Brand Voice
Headlines and CTAs should sound confident, specific, and conversational, never like agency filler. Example lines: “Good work starts with a sharper question.” and “See what we can make clearer.”

### Wordmark & Logo
Use the wordmark “Mara / Studio” as text paired with a custom clay circular mark made from two offset arcs, suggesting a page turn and an open conversation. The symbol should appear independently in the navigation and as the favicon; it should not be reduced to a generic monogram.

### Signature Brand Color
Clay Red — #D9674E.

## Content Structure
The first delivery is a single-page portfolio platform with a sticky header, a hero introduction, selected work, a concise service menu, a studio/about statement, a process strip, and a contact footer. The placeholder identity is “Mara / Studio” so the user can replace the name and details with their own. Navigation anchors are functional, project links open lightweight detail dialogs, and the contact CTA opens a mailto link.

## Reference Alignment — Blessed Agencia

The user selected https://blessedagenci.netlify.app/ as the visual reference. Treat its dark editorial agency composition, expressive serif display typography, compact uppercase metadata, numbered sections, hairline dividers, rounded CTA controls, proof strip, service rows, category pricing, FAQ rhythm, and calm inquiry form as the ground-truth experience to emulate. Preserve Marvellous Studio's orange signature accent, supplied logo, real website projects, book-work samples, pricing, currency selector, and contact details rather than copying Blessed Agencia's identity or content.
