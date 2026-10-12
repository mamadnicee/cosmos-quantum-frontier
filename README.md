# COSMOS — THE QUANTUM FRONTIER

A six-chapter, English-language scientific expedition built with React, TypeScript, Vite and a deliberately lightweight, locally generated Three.js scene. The viewport scene is persistent behind ordinary scrollable editorial chapters; no scroll hijacking, API, server function, model download, or external image request is required.

## Run locally

Requires Node.js 20.19+ (or 22.12+) and npm.

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production build is written to `dist/`. Vite is configured with `base: '/'`, suitable for a domain-root deployment.

## Cloudflare Pages

Connect the repository to Cloudflare Pages (Git integration), choose **Vite** / framework preset, set build command to `npm run build`, and output directory to `dist`. The included `wrangler.toml` records the Pages output directory. This is a static frontend; no environment variables, functions, or server-side services are needed.

## Experience and architecture

- `src/scene/CosmosScene.ts`: direct Three.js renderer, generated nebula canvas texture, star points, procedural bridge/circular instrument panels, black-hole/accretion visualization, curved coordinate mesh, quantum field, cosmic web and abstract finale. Camera targets are eased manually; resizing, device-pixel-ratio limits, visibility pausing, disposal, and reduced-motion behavior are handled in the scene module.
- `src/data/chapters.ts`: six chapter routes, labels, and editorial copy.
- `src/components/`: accessible chapter navigation, scientific marker shortcuts, and interactive evidence/concept panels.
- `src/App.tsx`: smooth normal-scroll chapter selection via IntersectionObserver, camera retargeting, progress, loading/failure state. `src/styles.css` contains the locally authored responsive design system.

Chapter navigation, marker buttons, chapter CTAs and the finale return controls scroll to their destinations. Black-hole field note disclosure, spacetime geometry modes, and quantum concept modes work locally. Chapter 05 links NASA's universe overview and the Nobel Prize 2011 Physics summary as further reading. Scene controls are keyboard-operable buttons with visible focus; chapters retain natural document scrolling and a screen-reader chapter announcement. DPR is capped and particle quantities are modest. A CSS atmospheric background and all editorial content remain when WebGL initialization fails.

The `Folder 1.zip` reference contained a cockpit screenshot only; it did **not** contain a GLB. Accordingly, the cockpit and cosmic artwork here are procedural Three.js geometry/materials and a locally generated canvas texture—not a purported supplied/downloaded model. If a real model is available later, place it under `public/models/` (create that directory) and add an optional loader in `src/scene/CosmosScene.ts`; the current build does not depend on such an asset.

## Validation

This deliverable has not been dependency-installed or production-built in the authoring environment. Run the commands above to resolve npm dependencies and verify a local build. The project is provided as source, without `node_modules`, `dist`, or bundled third-party assets. Google Fonts are optional styling enhancement; system font stacks remain configured as fallbacks when offline.
