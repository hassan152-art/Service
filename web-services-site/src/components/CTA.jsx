import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
export default function CTA() {
  return (
    <section className="py-[72px]"><div className="wrap">
      <Reveal className="relative overflow-hidden rounded-3xl bg-accent text-accentink px-6 py-14 text-center">
        <div className="blob bg-white/30 w-60 h-60 -top-20 -left-16" />
        <h2 className="relative">Ready to start your website?</h2>
        <p className="relative mt-3 opacity-90">Send me your idea today. I reply the same day with a plan and price.</p>
        <Link to="/contact" className="btn relative !bg-accentink !text-accent !border-accentink mt-7">Get a free quote</Link>
      </Reveal>
    </div></section>
  );
}
