# AMM Corporate Website — Design System

## Design direction

- Editorial minimalism inspired by the typography-led rhythm of the TOKIUM recruiting site, with a moderately compact content density suited to AMM's amount of source material.
- Medical credibility expressed through clarity, structure, measured motion, and strong contrast.
- The reference is used for layout language only; all composition, copy, color, and visuals are original to AMM.
- Website copy must remain source-led: use the supplied company profile and supplementary document without adding unsupported positioning, claims, statistics, or renamed capabilities.
- Prefer fewer sections and progressive disclosure over adding content to make a page feel more substantial.
- Home is a visual summary hub for About, Services, Regulatory, and Products; full service details live on the dedicated Services page.
- The homepage hero uses the AMM orbital emblem as its primary brand visual; editorial scene photography is reserved for supporting summary sections.
- Multi-line highlighted display copy uses a separate, content-width color block for each line, with visible spacing between blocks.
- Editorial scene photography may support context, but it must remain unbranded and avoid clinical-outcome or product-performance implications.
- Regulatory content follows the supplied QSD and product-registration copy; diagrams may reorganize source text but must not introduce new legal claims.
- Product photography is limited to images supplied by the client. Products without supplied photography use clearly labelled brand placeholders rather than simulated product images.
- Product listings use responsive, auto-wrapping card grids so future products can be added without redesigning the page structure.
- AI-generated people are used only as unnamed representative portraits; they must not be presented as identified real employees and should be replaceable with approved staff photography later.

## Brand palette

Extracted from the supplied logo:

- Brand purple: `#5B26BC`
- Deep purple: `#351274`
- Soft purple: `#BCA7E8`
- Pale purple surface: `#F4F0FC`
- Logo silver: `#C7C7C7`
- Charcoal: `#17141D`
- Secondary text: `#625D68`
- Warm white: `#F8F7F4`
- White: `#FFFFFF`

Purple is reserved for focus, key words, CTA surfaces, active states, and selected decorative geometry. Large areas remain white or warm white.

## Typography

- Font stack: `Inter Tight`, `Aptos`, `Helvetica Neue`, `Arial`, sans-serif.
- Display: 700–800 weight, tight tracking, responsive `clamp()` scale.
- Body: 16–18 px, 1.65–1.75 line-height, maximum 65–72 characters.
- Labels: uppercase, 12–13 px, 0.14–0.18 em tracking.

## Layout

- Content width: 1240 px maximum.
- Desktop gutters: 40–56 px; mobile gutters: 20–24 px.
- Section spacing: 64–104 px desktop; 56–80 px mobile.
- 8 px base spacing rhythm.
- Use asymmetrical editorial grids, oversized background words, and generous negative space.

## Components

- Sticky horizontal header using the supplied horizontal AMM logo and one emphasized contact CTA.
- Rounded-rectangle buttons with a minimum 48 px touch height.
- Thin 1 px borders; low shadow usage.
- Cards use structure and spacing before elevation.
- Visual placeholders use intentional branded geometry and a clear editorial label.

## Motion

- Reveal transitions: 450–700 ms, opacity and translate only.
- Hover transitions: 180–260 ms.
- The homepage emblem may use slow ambient orbit morphing and floating motion; motion remains subtle and decorative.
- Respect `prefers-reduced-motion`; content remains immediately readable without animation.

## Accessibility

- Body text contrast at least WCAG AA.
- Visible purple focus ring.
- Semantic headings, landmarks, skip link, accessible menu state, and descriptive image alternatives.
- Do not communicate meaning through color alone.

## Avoid

- Medical clichés such as glowing DNA, blue gradient stock art, or excessive laboratory imagery.
- Dense walls of copy copied directly from the company profile.
- Multiple competing CTAs in one section.
- Glassmorphism, large drop shadows, and generic corporate icon grids.
