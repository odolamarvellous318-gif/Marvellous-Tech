# Standalone Export Validation

The single-file export `marvellous-studio.html` opens successfully from a local `file://` URL. The page exposes the expected homepage sections and anchors for About, Services, Work, Book work, Pricing, FAQ, and Contact. The navigation, mobile-menu control, currency selector, FAQ buttons, project links, book PDF links, and contact form are present. Showcase images now render from embedded data URIs rather than Manus-only storage paths. Remaining external dependencies are limited to the Auralis live project image URL, live project links, WhatsApp/email actions, and the supplied PDF download URLs.

The browser interaction pass also confirmed that the FAQ controls are present and the currency selector changes the visible package prices from NGN to USD, showing $47+, $188+, and $250+ for the sample packages. The standalone page remains visually rendered after the image inlining step.

Refinement validation: the standalone file reopened successfully after data-URI optimization, six embedded images are now WebP, and the file size dropped from approximately 7,767,170 bytes to 485,987 bytes. The browser preview rendered the light theme automatically, exposed the theme toggle with the correct “Switch to dark mode” label, and returned to dark mode after clicking it with the label changing to “Switch to light mode.”
