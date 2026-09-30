import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CONFIG } from "../config.js";

const links = [["/", "Home"], ["/services", "Services"], ["/work", "Work"], ["/pricing", "Pricing"], ["/about", "About"], ["/faq", "FAQ"]];

export default function Navbar() {
  const root = document.documentElement;
  const dark = () => (root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
  const [isDark, setIsDark] = useState(dark());
  const [open, setOpen] = useState(false);
  const toggle = () => { root.dataset.theme = isDark ? "light" : "dark"; setIsDark(!isDark); };
  const cls = ({ isActive }) => `text-[.95rem] no-underline ${isActive ? "text-accent font-semibold" : "text-muted hover:text-ink"}`;
  return (
    <header className="sticky top-0 z-30 bg-bg/90 backdrop-blur border-b border-line">
      <nav aria-label="Main" className="wrap flex items-center justify-between h-16 gap-4">
        <Link to="/" className="font-display font-extrabold text-xl">{CONFIG.brand}</Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === "/"} className={cls}>{t}</NavLink>)}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle dark mode" className="border border-line rounded-lg px-2.5 py-1.5 text-sm cursor-pointer">{isDark ? "Light" : "Dark"}</button>
          <Link className="btn !py-2 !px-4 hidden sm:inline-block" to="/contact">Get a quote</Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="md:hidden border border-line rounded-lg px-3 py-1.5 cursor-pointer">{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-line bg-bg page">
          <div className="wrap py-4 grid gap-3">
            {[...links, ["/contact", "Contact"]].map(([to, t]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className={cls}>{t}</NavLink>)}
          </div>
        </div>
      )}
    </header>
  );
}
