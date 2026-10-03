# Rafael Zimmermann — design direction

Personal engineering portfolio and technical writing, for engineers, collaborators and hiring teams. The first screen should explain Rafael’s specialty and offer a clear path to experience or contact. Existing career facts remain the source of truth.

## Plan
1. Replace the oversized sidebar with a compact shared navigation.
2. Lead with distributed systems and streaming, supported by Rafael’s existing portrait.
3. Make the career chronology easier to scan; preserve all roles and qualifications.
4. Surface the existing Rust article on the homepage and unify the reading experience.
5. Verify mobile navigation, keyboard access, links, reduced motion and responsive layout.

## Visual direction
Cool, daylight engineering notebook. Avoid neon gradients, decorative dashboards and floating cards. The signature is a split introduction with a large two-line name and a portrait framed by a small, factual engineering caption.

Runtime token owner: `css/style.css` `:root`.
Palette: mist #f3f6fa, white #ffffff, ink #172b44, slate #52647b, blue #2457c5, line #d6dfea.
Type: system rounded sans (Avenir Next where installed) for display, system sans for body, system monospace for small engineering captions. No remote font dependency.
Layout: 1120px content width, top navigation, split hero, generous section spacing, quieter chronological experience cards, three-column skills and contact layouts that stack on mobile.

## Mockup
`design/home-mockup.svg` records the composition before implementation.

```text
RZ / Rafael Zimmermann            About Experience Skills Education Contact Blog

SOFTWARE ENGINEER · VALENCIA       ┌───────────────────┐
Rafael                            │                   │
Zimmermann                        │  Existing portrait│
Distributed systems.              │                   │
Data in motion.                   └───────────────────┘
[Explore experience] [Get in touch]  STREAMING / SYSTEMS / CLOUD

About                 Focused on reliable backend systems…

Experience            Shopify / Senior Software Developer
                      trivago / Search, ranking, profiling
                      Earlier roles…

From the notebook     Rust app launcher →
Skills / Education / Contact
```

## Interaction and accessibility
Native anchors preserve URLs and browser navigation. Mobile menu is a non-modal disclosure with expanded state and Escape dismissal. All résumé content remains visible without JavaScript. Focus rings, 44px navigation targets, reduced-motion handling, and readable mobile wrapping are required. Blog and article share the same stylesheet and navigation behavior. Unrelated family and mirror pages are outside this redesign.
