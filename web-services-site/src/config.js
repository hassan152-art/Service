// Apni details yahan change karein
export const CONFIG = {
  name: "Your Name",
  brand: "YourName.dev",
  whatsapp: "923000000000", // country code + number, bina + ya space ke
  phoneDisplay: "+92 300 0000000",
  email: "you@example.com",
  photo: "", // apni photo: public/images/me.jpg rakh kar "/images/me.jpg" likhein
  social: { LinkedIn: "#", GitHub: "#", Instagram: "#" },
};

export const stats = [[25, "+", "Projects delivered"], [20, "+", "Happy clients"], [3, "+", "Years experience"], [24, "h", "Reply time"]];

export const services = [
  { kind: "business", title: "Business website", desc: "Home, about, services and contact pages that make your business look trusted.", points: ["Clean, professional design", "Contact form and WhatsApp button", "Google-friendly structure"] },
  { kind: "store", title: "Online store", desc: "Product pages, cart and order forms so customers can buy from you any time.", points: ["Product catalog with search", "Cart and order flow", "Easypaisa / JazzCash / COD ready"] },
  { kind: "portfolio", title: "Portfolio site", desc: "Show your work clearly, for designers, photographers, freelancers and agencies.", points: ["Image galleries", "Case study pages", "Easy to update"] },
  { kind: "landing", title: "Landing page", desc: "One focused page to promote an offer, event or product and collect enquiries.", points: ["Ready in 3 to 5 days", "Built to get enquiries", "Fast on mobile data"] },
  { kind: "app", title: "Web app", desc: "Dashboards, booking systems and custom tools built with React.", points: ["Login and user roles", "Admin dashboard", "Custom features"] },
  { kind: "care", title: "Redesign and care", desc: "Fix a slow or outdated site, or keep it updated every month.", points: ["Speed and design fixes", "Monthly updates", "Backups and security"] },
];

// image: "" chor dein to illustration dikhega. Screenshot lagane ke liye "/images/project1.jpg" likhein
export const projects = [
  { title: "Farmers market website", cat: "Websites", desc: "Listings and vendor pages built with React and Tailwind.", link: "#", image: "" },
  { title: "Restaurant landing page", cat: "Websites", desc: "Menu, gallery and table booking by WhatsApp.", link: "#", image: "" },
  { title: "Clothing store", cat: "Stores", desc: "Product catalog with cart and order form.", link: "#", image: "" },
  { title: "Grocery delivery store", cat: "Stores", desc: "Online ordering with delivery areas and time slots.", link: "#", image: "" },
  { title: "Clinic booking app", cat: "Apps", desc: "Appointments, doctor profiles and reminders.", link: "#", image: "" },
  { title: "Fitness studio website", cat: "Websites", desc: "Class timetable, trainer pages and membership sign-up.", link: "#", image: "" },
];

export const steps = [
  ["Tell me what you need", "Message me your idea, budget and deadline. I reply the same day with a plan and price."],
  ["Design", "You see the layout and colors first and ask for changes before any code is written."],
  ["Development", "I build the site and share a preview link so you can follow progress."],
  ["Launch and support", "I put it live on your domain and stay available for fixes after delivery."],
];

export const plans = [
  { name: "Basic", price: "From Rs 15,000", items: ["Up to 3 pages", "Mobile-friendly design", "Contact form and WhatsApp button", "1 revision round"] },
  { name: "Standard", price: "From Rs 35,000", pop: true, items: ["Up to 8 pages", "Custom design", "Basic SEO and speed tuning", "3 revision rounds", "Hosting and domain setup"] },
  { name: "Premium", price: "From Rs 80,000", items: ["Online store or web app", "Admin panel to manage content", "Payment and order flow", "30 days free support"] },
];

export const addons = [["Extra page", "Rs 3,000"], ["Logo design", "Rs 8,000"], ["Monthly care plan", "Rs 5,000 / month"], ["Content writing", "Rs 2,000 / page"]];

export const skills = [["React", 90], ["Tailwind CSS", 92], ["JavaScript", 88], ["WordPress", 80], ["SEO basics", 75]];

export const testimonials = [
  ["He understood exactly what my shop needed and finished before the deadline. Orders started in the first week.", "Client name", "Shop owner"],
  ["Clear communication and a site that looks far better than my competitors'.", "Client name", "Restaurant owner"],
  ["Fast replies on WhatsApp and no confusing technical talk. Highly recommended.", "Client name", "Clinic manager"],
];

export const faqs = [
  ["How long does a website take?", "A landing page takes 3 to 5 days. A business site takes 1 to 2 weeks. Stores and apps take longer, and I give you the date before we start."],
  ["How does payment work?", "50% advance to start, and the remaining 50% when you approve the finished site. You can pay by bank transfer, Easypaisa or JazzCash."],
  ["Do I get hosting and a domain?", "Yes, I can set up both for you. You own the domain, and hosting is paid yearly at cost."],
  ["Can I change things after launch?", "Yes. Small changes are free for 30 days. After that I offer a simple monthly care plan."],
  ["Will my site work on mobile?", "Every site I build is designed for phones first and tested on different screen sizes."],
  ["Can you redesign my old website?", "Yes. I keep your content and give it a new design, faster loading and better mobile layout."],
];
