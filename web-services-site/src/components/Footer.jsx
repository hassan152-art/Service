import { Link } from "react-router-dom";
import { CONFIG } from "../config.js";
export default function Footer() {
  return (
    <footer className="border-t border-line py-12 text-muted text-[.95rem]">
      <div className="wrap grid gap-8 md:grid-cols-3">
        <div><div className="font-display font-extrabold text-xl text-ink">{CONFIG.brand}</div><p className="mt-2 max-w-[32ch]">Websites for businesses that want more customers online.</p></div>
        <nav aria-label="Footer" className="grid gap-2 content-start">
          {[["/services", "Services"], ["/work", "Work"], ["/pricing", "Pricing"], ["/about", "About"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}
        </nav>
        <div className="grid gap-2 content-start">
          <a href={`https://wa.me/${CONFIG.whatsapp}`}>WhatsApp: {CONFIG.phoneDisplay}</a>
          <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          <div className="flex gap-4">{Object.entries(CONFIG.social).map(([n, h]) => <a key={n} href={h}>{n}</a>)}</div>
        </div>
      </div>
      <div className="wrap mt-8">&copy; {new Date().getFullYear()} {CONFIG.brand}. All rights reserved.</div>
    </footer>
  );
}
