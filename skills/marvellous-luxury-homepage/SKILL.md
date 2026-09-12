---
name: marvellous-luxury-homepage
description: Build or redesign a premium single-page creative studio website with dark luxury editorial styling, real portfolio proof, template showcases, service rows, pricing, FAQ, platform logos, and contact conversion. Use for luxury freelancer, agency, studio, Shopify, web-template, book-publishing, or creative-services homepage projects.
---

# Marvellous Luxury Homepage

## Purpose

Create a homepage-first studio experience that feels authored, premium, and commercially clear. Use the user's real brand, work, contact details, pricing, and assets. Never invent testimonials, client outcomes, or client attribution; clearly label invented demonstrations as sample, concept, or studio-template work.

## Workflow

1. Confirm brand identity, audience, services, contact actions, pricing model, real work, template work, and any reference site.
2. Inspect reference sites passively and record layout rhythm, type pairing, navigation, spacing, controls, motion, and responsive behavior.
3. Define one visual direction. For this Marvellous Studio pattern, use a dark luxury editorial canvas constrained to red, black, white, and blue, with expressive serif display typography, thin rules, rounded CTAs, subtle lighting, and asymmetric hero composition.
4. Build one homepage with anchored navigation in this order: hero, selected work, positioning/about, founder, services, tools/platforms, live project proof, template showcase, pricing, book work, FAQ, consultation/contact, and footer.
5. Preserve live or real work as real work. Label fictional demonstrations and reusable showcase layouts as “Sample project,” “Concept project,” or “Studio Template.” Keep template work visually distinct from live/client work.
6. Use a compact editorial service-row system: number, strong title, plain-language scope, and aligned action. Add transform/opacity hover feedback under 300ms.
7. Use a sticky glass navigation bar with an opaque small-screen fallback. Keep keyboard focus visible and avoid hover-only navigation.
8. Add FAQ rows with one open item at a time, a clear chevron state, and reduced-motion-safe transitions.
9. Add a Tools & Platforms proof strip using official or approved brand assets where available. Include a short service-use description for each platform. If an official asset is unavailable, use a clearly labeled neutral fallback.
10. Place real project screenshots directly beneath the platform strip. Add concise contribution and verified-result notes; never invent outcomes. Link live projects externally when supplied.
11. Add a consultation CTA and simple inquiry form. For static sites, submit to mailto/WhatsApp or show a clear success state; never claim backend delivery that does not exist.
12. Add non-blocking anchor analytics only when an analytics setup is available. Track homepage navigation with passive listeners and tolerate analytics being unavailable.
13. Show a redirect notice only when an old-link redirect is detected through an explicit query flag or redirect state; show nothing on normal visits.
14. Test homepage anchors, unknown-route fallback, FAQ interaction, form success state, external project links, official logo visibility, screenshot-backed proof, desktop, mobile, and published domain.
15. When a single-file export is requested, create one `marvellous-studio.html` document with all CSS in `<style>` and all behavior in an inline `<script>`; keep external dependencies to intentional live links only.
16. Add an accessible theme toggle to the inline script. Prefer a button with an explicit `aria-label`, persist the choice in `localStorage`, respect `prefers-color-scheme` on first visit, and toggle a root `data-theme` attribute rather than rewriting every component.
17. Optimize embedded image assets before delivery. Resize images to their rendered dimensions, convert photographic assets to quality-controlled WebP or compressed JPEG, inline only the assets required for portability, and compare file size before/after. Keep PDFs as links unless they are explicitly required to be bundled.
18. Preview the standalone file directly in a browser using a local `file://` URL or a simple static server. Verify the hero, responsive navigation, embedded images, theme toggle, FAQ accordion, currency selector, anchor scrolling, and form behavior; record findings before pushing.
19. Push only the requested standalone file and deliberate skill/checklist changes to the existing public repository. Verify the remote branch and file URL after pushing.
20. Save a checkpoint only after TypeScript/production checks and representative visual verification pass.

## Content safeguards

- Do not fabricate reviews, ratings, testimonials, client names, outcomes, or logos.
- Use “real work sample” only when the user supplied the work or explicitly confirmed it.
- Use “sample,” “concept,” or “Studio Template” for invented demonstrations.
- Treat pricing as starting points unless the user explicitly confirms fixed prices. Include scope, revision, timeline, integration, and third-party-cost caveats.
- Use official platform assets only when the relevant brand guidance permits the intended use. Do not imply certification, sponsorship, or partnership.
- Keep WhatsApp and email actions visible without making unsupported promises about response times.

## Standalone export rules

Treat the standalone HTML as a portable artifact, not a second React app. Keep the content hierarchy and brand voice aligned with the source homepage, but replace component state with small DOM event handlers. Use CSS custom properties for theme tokens so dark/light mode changes remain centralized. Use `localStorage` only for non-sensitive preferences and provide a visible fallback when storage is unavailable. Keep any external URL intentional and document it in the validation notes.

For compression, use image dimensions that match the largest rendered slot, prefer WebP where broad browser support is acceptable, and avoid base64-encoding files that are not needed for the standalone experience. Do not embed secrets, API keys, or fabricated proof. Compare byte size with `wc -c` and confirm that embedded images still load after compression.

## Responsive and motion rules

Use mobile-first layout, prefers-reduced-motion, strong contrast, 44px-equivalent touch targets, and CSS transitions limited to transform and opacity for interaction feedback. Stagger entrances lightly; never let motion block access to content. Use depth through layered surfaces, hairline borders, subtle red/blue lighting, and carefully limited glow.

## Delivery checklist

- Run TypeScript and production build checks.
- Capture the homepage at desktop and mobile sizes.
- Verify unknown URLs render the homepage when homepage-only behavior is requested.
- Verify FAQ, form, hover, and sticky-navigation states.
- Verify analytics instrumentation does not throw when analytics is unavailable.
- Verify platform logo assets and screenshot-backed project cards.
- Verify published domain and any supplied custom domain.
- For standalone delivery, verify the file opens directly, embedded images load, and the inline script has no console errors.
- Verify dark/light mode persistence across reloads and readable contrast in both themes.
- Compare standalone file size before and after data-URI optimization.
- Verify the GitHub file URL and remote branch after pushing.
- Deliver the latest checkpoint and summarize changes plus practical next steps.
