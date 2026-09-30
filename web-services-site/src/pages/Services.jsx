import { Link } from "react-router-dom";
import { ServiceArt } from "../components/Art.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { services } from "../config.js";

export default function Services() {
  return (
    <>
      <PageHeader title="Services" text="Pick one service or combine them. Every site works on phones, loads fast and can be found on Google." />
      <section className="pb-6"><div className="wrap grid gap-16 mt-8">
        {services.map((s, i) => (
          <div key={s.title} className="grid gap-8 items-center md:grid-cols-2">
            <Reveal className={`${i % 2 ? "md:order-2" : ""} rounded-2xl overflow-hidden border border-line zoom`}>
              <div className="aspect-[400/260] overflow-hidden"><ServiceArt kind={s.kind} alt={i % 2 === 1} /></div>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="!text-3xl">{s.title}</h2>
              <p className="lead">{s.desc}</p>
              <ul className="mt-4 grid gap-2">
                {s.points.map((p) => <li key={p} className="flex gap-2.5"><span className="text-accent font-bold">&#10003;</span>{p}</li>)}
              </ul>
              <Link to="/contact" className="btn mt-6">Ask for a quote</Link>
            </Reveal>
          </div>
        ))}
      </div></section>
      <CTA />
    </>
  );
}
