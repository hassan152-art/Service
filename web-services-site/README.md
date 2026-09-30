# Web Services Website (React + Vite + Tailwind + React Router)

## Chalane ka tareeqa
1. Node.js install karein (nodejs.org, LTS version).
2. Is folder mein terminal kholein:
   npm install
   npm run dev
3. Browser mein http://localhost:5173 kholein.

## Pages
Home, Services, Work, Pricing, About, FAQ, Contact (src/pages/)

## Apni details aur pictures badalna
- src/config.js: naam, WhatsApp number, email, services, projects, prices, FAQ, reviews.
- Apni photo: public/images/me.jpg rakhein, config mein photo: "/images/me.jpg".
- Project screenshots: public/images/ mein rakhein, config mein image: "/images/project1.jpg".
- Colors: src/index.css (upar :root).

## Live karna
npm run build chalayein, phir "dist" folder Netlify ya Vercel par upload karein (redirect files pehle se shamil hain).
