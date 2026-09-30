import { useState } from "react";
import { ProjectArt } from "../components/Art.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { projects } from "../config.js";

const cats = ["All", "Websites", "Stores", "Apps"];

export default function Work() {
  const [cat, setCat] = useState("All");
  const list = projects.map((p, i) => ({ ...p, i })).filter((p) => cat === "All" || p.cat === cat);
  return (
    <>
      <PageHeader title="My work" text="A few projects I have built. Click a project to open the live site." />
      <section className="pb-6"><div className="wrap">
        <div className="flex flex-wrap gap-2 mt-6" role="group" aria-label="Filter projects">
          {cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`btn !py-1.5 !px-4 ${cat === c ? "" : "ghost"}`}>{c}</button>)}
        </div>
        <div className="grid3" key={cat}>
          {list.map((p, n) => (
            <Reveal key={p.title} delay={n * 90}>
              <a href={p.link} className="card lift !p-0 overflow-hidden zoom block h-full">
                <div className="aspect-[400/260] overflow-hidden"><ProjectArt i={p.i} image={p.image} title={p.title} /></div>
                <div className="p-5">
                  <span className="text-xs font-semibold bg-soft text-accent rounded-full px-2.5 py-0.5">{p.cat}</span>
                  <h3 className="mt-2">{p.title}</h3><p>{p.desc}</p>
                  <span className="inline-block mt-3 font-semibold underline">View live site</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div></section>
      <CTA />
    </>
  );
}
