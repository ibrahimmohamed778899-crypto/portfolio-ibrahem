# Ibrahem Mohamed Ibrahem — Video Editor Portfolio

A production-ready, cinematic, animation-heavy portfolio website built for **Ibrahem Mohamed Ibrahem** (Video Editor, Colorist & Motion Designer).

---

## 🌟 Highlights & Features

- **Dual-Theme Design System (Dark & Light Mode)**:
  - **Dark Mode**: Deep cinematic black (`#000004`), teal accents (`#062423`, `#547475`), glowing mint highlights (`#19C99F`), and high-contrast typography.
  - **Light Mode**: Warm editorial parchment (`#FFF9EC`), forest green accents (`#1D402D`, `#4A7052`), and balanced typography.
  - Smooth cross-fade transition and persistent theme memory via `localStorage`.
- **Advanced GSAP + ScrollTrigger Animations**:
  - Hero staggered entrance animation on page load.
  - Dynamic number counter animation (Years of experience, Cuts, Client satisfaction).
  - Parallax floating container for the profile picture.
  - Vertical glowing timeline with illuminated milestones and broadcast TV credits.
  - Continuous horizontal infinite marquee for software suites with pause-on-hover.
  - Interactive testimonials slider featuring 6 authentic Arabic reviews (Egyptian & Khaleeji dialects) with star animations.
  - Scroll reading progress indicator fixed at the top of the screen.
- **Pixel-Perfect Responsiveness**:
  - Tested across breakpoints: 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (large display).
  - Animated mobile drawer navigation with hamburger icon transformation.
- **Accessibility & Motion Consideration**:
  - Semantic HTML5 structure with ARIA labels.
  - Full support for `prefers-reduced-motion`.

---

## 📂 Project Structure

```
├── index.html                 # Semantic HTML5 single-page document
├── tsconfig.json              # TypeScript configuration (ES2020 / ESNext)
├── README.md                  # Project documentation & usage guide
└── src/
    ├── styles/
    │   └── main.css           # CSS design tokens, dual palettes & keyframes
    └── scripts/
        ├── main.ts            # TypeScript source code (theme, GSAP, slider, counters)
        └── main.js            # Pre-compiled standalone JavaScript for immediate execution
```

---

## 🚀 How to Run the Website

### Option 1: Direct Run (No Setup Required)
Simply open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari). The site includes the pre-compiled `src/scripts/main.js` and loads GSAP from CDN, so it runs immediately out of the box.

### Option 2: Live Server (VS Code / Antigravity)
Right click `index.html` and choose **Open with Live Server** or use any static HTTP server:
```bash
npx serve .
```

---

## 🛠️ Modifying & Compiling TypeScript

The source logic is written in `src/scripts/main.ts`. If you make changes to `src/scripts/main.ts`, compile it to `src/scripts/main.js` using the TypeScript compiler:

```bash
# Install TypeScript globally (if not already installed)
npm install -g typescript

# Compile TypeScript
tsc
```
`tsconfig.json` is already pre-configured to output directly to `src/scripts/main.js`.

---

## 🖼️ Adding Images (Profile Photo & Software Logos)

Per the project policy, all images are structured with intentional placeholder states and explicit HTML comments:

1. **Profile Photo**:
   In `index.html` under Section 1 (`#home`), locate:
   ```html
   <!-- PLACE PROFILE IMAGE HERE -->
   <img src="" alt="Ibrahem Mohamed Ibrahem" id="profile-img">
   ```
   Add your image path (e.g. `assets/images/profile.jpg`) to the `src` attribute.

2. **Software Logos**:
   In `index.html` under Section 2 (`#skills`), find the marquee pills with:
   - `<!-- PLACE DAVINCI RESOLVE LOGO HERE -->`
   - `<!-- PLACE ADOBE PREMIERE PRO LOGO HERE -->`
   - `<!-- PLACE ADOBE AFTER EFFECTS LOGO HERE -->`
   - `<!-- PLACE ADOBE PHOTOSHOP LOGO HERE -->`
   - `<!-- PLACE ADOBE ILLUSTRATOR LOGO HERE -->`
   - `<!-- PLACE ADOBE AUDITION LOGO HERE -->`
   Add the respective SVG or PNG image path to each `<img>` tag.

3. **Client Testimonial Avatars**:
   In `index.html` under Section 5 (`#testimonials`), find `<!-- PLACE CLIENT AVATAR HERE -->` and add your client photos if available.

---

## 📞 Direct Contact Links

- **WhatsApp**: [https://wa.me/201008284111](https://wa.me/201008284111)
- **Email**: [mailto:ibrahim.mohamed778899@gmail.com](mailto:ibrahim.mohamed778899@gmail.com)
