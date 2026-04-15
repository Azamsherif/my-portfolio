# Mohamed Sherif Kamel — Portfolio

## Overview
This is a personal portfolio website built with React, Vite and Tailwind CSS to showcase Mohamed Sherif Kamel’s CV, projects, skills and contact information. It is ready for local development and deployment (GitHub / Vercel).

## Features
- Light / Dark theme with preference saved to `localStorage`
- Hero section with circular profile image and clear CTA
- Projects list with links to GitHub repositories
- Sections: About, Skills, Experience, Education, Projects, Certifications, Languages, Contact, Footer
- Smooth animations using Framer Motion
- Icons via `lucide-react`

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- lucide-react
- Node.js & npm

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
