# LEDR Website

Five static pages, same pattern as the GSCBOR site: plain HTML with shared
external CSS/JS and one centralized place to plug in images.

## Pages
- `index.html` — LEDR home (Designation / Launch / Broker Summit overview)
- `alliance.html` — Alliance (affiliate leadership program)
- `designation.html` — The Designation (6-module program)
- `launch.html` — Launch (11-module, 11-month program)
- `summit.html` — The Broker Summit (5 pillars)

## Shared files
- `css/styles.css` — all styling, brand colors/fonts as CSS variables at the top
- `js/main.js` — mobile nav toggle
- `js/image-config.js` — **add your own hero images here**

## Adding your own images
Open `js/image-config.js`. Each page's hero has a key:

```js
const IMAGE_CONFIG = {
  "home-hero": "",
  "alliance-hero": "",
  "designation-hero": "",
  "launch-hero": "",
  "summit-hero": "",
};
```

Drop your image files into the `images/` folder, then point a key at it, e.g.:

```js
"alliance-hero": "images/alliance-hero.jpg",
```

Leave a key blank and that hero keeps its placeholder panel — nothing breaks.

## Brand tokens (css/styles.css :root)
- `--navy-deepest` #05111F — nav bar
- `--navy-dark` #0B1F3D — hero / dark panels
- `--orange` #D98E1E — icon accent
- `--orange-dark` #C87C1A — buttons
- Fonts: Montserrat (display/headlines) + Open Sans (body)

## Deploying
Same as GSCBOR — push to Netlify (drag-and-drop the folder or connect the repo)
and point your GoDaddy domain/subdomain at it.
