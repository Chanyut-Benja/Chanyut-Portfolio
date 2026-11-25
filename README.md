# Chanyut Benjapalakorn — Personal Portfolio

Minimalist, modern **Bento Grid** personal portfolio for **Chanyut Benjapalakorn (Yut)**, a 3rd-year Information Technology (Multimedia Track) undergraduate at KMITL seeking **UX/UI Product Design** and **Full-Stack / Backend Developer** internships.

## Key Features

- **Asymmetric Bento Grid Architecture:** Responsive Bento layout featuring Hero & Profile, Tech Stack & Tools, Featured Projects, Education, and Connect & Socials cards (collapsing cleanly to a single column on mobile).
- **Light & Dark Mode:** Seamless theme toggle between Light Mode (`#F8FAFC` / `#FFFFFF`) and Dark Mode (`#0B0F19` / `#111827`) with `localStorage` persistence and zero first-paint flash.
- **Interactive Project Filter:** Smooth category filtering (`All`, `Web & Backend`, `UI/UX Design`, `Game & 3D`).
- **Slide-over Case Study Drawer:** Click any project card to read its Problem Statement, System Architecture / Design Process, Key Highlights, Technologies Used, and GitHub Repository link.
- **One-Click Copy & CV Download:** Instant clipboard copy for email and phone number with toast feedback, plus a downloadable PDF resume (`assets/Chanyut_Benjapalakorn_CV.pdf`) and clean `/cv` & `/resume` short-link redirects.
- **Vercel Production Ready:** Pre-configured with `vercel.json` (clean URLs, security headers, cache policies, `/cv` redirect), Open Graph social preview card (`assets/og-preview.png`), custom `404.html`, `favicon.svg`, and `robots.txt`.

## Project Structure

```text
CV/
├── index.html                              # Semantic Bento Grid HTML structure + SEO/OG metadata
├── 404.html                                # Custom 404 Not Found page for Vercel
├── styles.css                              # Light/Dark color tokens, Bento Grid, UI mockups & responsive CSS
├── app.js                                  # Project filter, Slide-over Case Study Drawer, Theme & Clipboard logic
├── vercel.json                             # Vercel routing, /cv redirect, security & cache headers
├── favicon.svg                             # Brand vector favicon
├── robots.txt                              # Search engine crawler directives
├── assets/
│   ├── Chanyut_Benjapalakorn_CV.pdf        # Downloadable PDF resume
│   ├── matchwork-preview.png               # MatchWork project screenshot
│   ├── easydorm-preview.png                # EasyDorm project screenshot
│   └── og-preview.png                      # 1200x630 Open Graph social sharing preview card
└── README.md
```

## Local Preview

Open `index.html` directly in any modern browser, or serve locally:

```bash
# Python
python -m http.server 5500

# Node.js (Windows PowerShell)
npx.cmd serve .
```

## Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended — Auto-deploy on every push)

1. Create a new repository on GitHub (e.g., `chanyut-portfolio`).
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/Chanyut-Benja/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new) and **Import** your GitHub repository:
   - **Framework Preset:** `Other` (Static — detected automatically)
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave empty / default)*
4. Click **Deploy**.

### Option 2: Deploy directly via Vercel CLI

```bash
# Windows PowerShell
npx.cmd vercel

# Production deployment
npx.cmd vercel --prod
```
