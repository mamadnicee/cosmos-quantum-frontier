# COSMOS — Model Navigation

A full-viewport React / TypeScript / Three.js spacecraft viewer with six science chapters, Journey / Orbit / Explore navigation, and a route editor. The project was assembled as a complete replacement because source review materials were unavailable.

## Add your model

Copy or rename your spacecraft GLB to `public/models/spaceship.glb`. That model is intentionally not bundled here and was not inspected or validated. The viewer normalizes the model's longest bounding-box dimension to 20 scene units while retaining the GLTF hierarchy and materials.

The six default camera stops are provisional exterior viewpoints, **not calibrated** to your model, and no interior route or collision handling is promised. Use **Route editor** to navigate in Journey, Orbit, or Explore; capture a viewpoint for each chapter; export the route JSON for backup. Import a JSON containing `{ "version": 1, "stops": [...] }` (or the six-stop array directly). Validated routes are also stored in browser localStorage. Confirm safe viewpoints on your actual GLB before publishing. Free-flight Explore remains available regardless of route calibration.

## Local development

```sh
npm install
npm run dev
npm run build
npm run preview
```

Build output is `dist/`. For Cloudflare Pages / Wrangler use framework preset **Vite**, build command `npm run build`, output directory `dist`, and root base `/`; `wrangler.toml` is included.

## Controls and accessibility

Journey: mouse wheel, vertical touch swipes, arrow keys, or chapter buttons. Orbit: drag and zoom. Explore: pointer drag to look; WASD to move and Q/E for altitude. The on-screen directional pad offers basic touch movement. Chapter copy remains available if WebGL or model loading fails. Reduced-motion preference makes route retargeting immediate.

Three.js loads `/models/spaceship.glb`. Loading errors show a retry and do not prevent reading chapter content. No external image or font assets are required.
