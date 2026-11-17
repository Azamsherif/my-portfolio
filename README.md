# Mohamed Sherif Kamel — Portfolio

## Overview
This is a personal portfolio website built with React, Vite and Tailwind CSS to showcase Mohamed Sherif Kamel’s CV, projects, skills and contact information. It is ready for local development and deployment (GitHub / Vercel).

## Features
- **Interactive 3D scene** (three.js / React Three Fiber): a morphing glass core with orbit rings and particles that glides to a new position and colour for each chapter and follows the mouse
- **Guided tour**: the page is split into 7 numbered chapters, with a chapter rail, a bottom guide dock (where you are, what's here, Next/Previous), a "Take the guided tour" button, and a scroll progress bar
- **Smooth, soft motion**: Lenis inertial scrolling, blur-in reveals, 3D tilt cards with cursor spotlight, magnetic buttons, soft cursor, animated counters, and a self-drawing experience timeline
- Accent colour shifts per chapter across the UI and the 3D scene
- Light / dark theme (saved to `localStorage`)
- Projects: category filter, live search, and an animated case-study modal
- Respects `prefers-reduced-motion`; the 3D scene is lazy-loaded and skipped when WebGL is unavailable

## Editing content
All text, links, projects, skills, and certifications live in [`src/data.js`](src/data.js). Edit that file; the sections update automatically.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- three.js, @react-three/fiber, @react-three/drei
- Framer Motion, Lenis
- lucide-react

## Local Setup
1. Install dependencies
```bash
npm install
```
2. Start development server
```bash
npm run dev
```
3. Create production build
```bash
npm run build
```
4. Preview production build locally
```bash
npm run preview
```

## Prepare before pushing to GitHub
- Ensure `dist/` is listed in `.gitignore` (do not commit build output).
- Place your profile image at `src/assets/profile.jpg` or update the import path in `src/components/Hero.jsx`.
- Update social links (LinkedIn, GitHub) in the footer and contact sections.

## Suggested Git commands to push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Deploy on Vercel
- Import the repository in Vercel (automatic). Default Vite settings work.
- If needed: build command = `npm run build`, output directory = `dist`.

## Notes
- Verify `src/assets/profile.jpg` is the intended profile image and is not empty before committing.
- Update `index.html` meta tags (OG image, site URL) if you have a production domain.

---

If you want a shorter README (one-page) or additional badges (license, build, vercel), tell me which badges and I will add them.
