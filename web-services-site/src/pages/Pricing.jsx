import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { addons, plans } from "../config.js";

export default function Pricing() {
  return (
    <>
      <PageHeader title="Packages and pricing" text="Starting prices. The final price depends on your pages and features, and I confirm it before we begin." />
      <section className="pb-6"><div className="wrap">
        <div className="grid3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className={`card lift h-full ${p.pop ? "!border-2 !border-accent" : ""}`}>
                {p.pop && <span className="inline-block bg-accent text-accentink text-[.8rem] font-semibold px-2.5 rounded-full mb-2">Most chosen</span>}
                <h3>{p.name}</h3>
                <div className="font-display font-extrabold text-[2rem] my-2.5">{p.price}</div>
                <ul className="pl-[18px] list-disc text-muted text-[.98rem] mt-3 mb-5">{p.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link to="/contact" className={`btn ${p.pop ? "" : "ghost"}`}>Choose {p.name}</Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <h2 className="!text-3xl">Extras</h2>
          <div className="mt-6 bg-surface border border-line rounded-2xl divide-y divide-line">
            {addons.map(([n, pr]) => <div key={n} className="flex justify-between px-5 py-4"><span>{n}</span><b>{pr}</b></div>)}
          </div>
          <p className="text-muted mt-4 text-sm">Payment: 50% advance, 50% on delivery.</p>
        </Reveal>
      </div></section>
      <CTA />
    </>
  );
}
