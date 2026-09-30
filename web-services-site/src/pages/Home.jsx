import { Link } from "react-router-dom";
import { HeroArt, ProjectArt, ServiceArt } from "../components/Art.jsx";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import CTA from "../components/CTA.jsx";
import { projects, services, skills, stats, steps } from "../config.js";

export default function Home() {
  const words = "Your business, online and getting customers.".split(" ");
  const tape = [...skills.map((s) => s[0]), "Responsive design", "Fast loading", "SEO"];
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-12">
        <div className="blob bg-soft w-96 h-96 -top-32 -left-24" />
        <div className="blob bg-mint w-80 h-80 bottom-0 right-0" style={{ animationDelay: "-5s" }} />
        <div className="wrap relative grid gap-10 items-center md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1>{words.map((w, i) => <span key={i} className="rise mr-[.25em]" style={{ "--d": `${i * 90}ms` }}>{w}</span>)}</h1>
            <Reveal delay={500}><p className="lead text-lg">I design and build fast, mobile-friendly websites for shops, brands and professionals. You explain the idea, I deliver a site that is ready to launch.</p></Reveal>
            <Reveal delay={650} className="flex flex-wrap gap-3 mt-7">
              <Link className="btn" to="/contact">Get a free quote</Link>
              <Link className="btn ghost" to="/work">See my work</Link>
            </Reveal>
          </div>
          <Reveal delay={300}><HeroArt /></Reveal>
        </div>
      </section>

      <section className="pb-14"><div className="wrap grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(([n, s, l]) => <Counter key={l} to={n} suffix={s} label={l} />)}
      </div></section>

      <div className="marquee py-4"><div className="marquee-track font-display font-bold text-2xl text-muted">
        {[0, 1].map((k) => <div key={k} className="flex" aria-hidden={k === 1}>{tape.map((t) => <span key={t + k} className="px-8 whitespace-nowrap">{t} <span className="text-accent">&bull;</span></span>)}</div>)}
      </div></div>

      <section className="sec"><div className="wrap">
        <Reveal><h2>What I build</h2><p className="lead">Every site works on phones, loads fast and can be found on Google.</p></Reveal>
        <div className="grid3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="card lift !p-0 overflow-hidden zoom h-full">
                <div className="aspect-[400/260] overflow-hidden"><ServiceArt kind={s.kind} alt={i === 1} /></div>
                <div className="p-5"><h3>{s.title}</h3><p>{s.desc}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8"><Link to="/services" className="btn ghost">See all services</Link></Reveal>
      </div></section>

      <section className="sec"><div className="wrap">
        <Reveal><h2>Recent projects</h2></Reveal>
        <div className="grid3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <Link to="/work" className="card lift !p-0 overflow-hidden zoom block h-full">
                <div className="aspect-[400/260] overflow-hidden"><ProjectArt i={i} image={p.image} title={p.title} /></div>
                <div className="p-5"><h3>{p.title}</h3><p>{p.desc}</p></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <Reveal><h2>How we work together</h2></Reveal>
        <ol className="grid gap-3.5 mt-9 p-0 list-none md:grid-cols-2">
          {steps.map(([t, d], i) => (
            <Reveal as="li" delay={i * 100} key={t} className="grid grid-cols-[44px_1fr] gap-4 bg-surface border border-line rounded-2xl px-5 py-[18px]">
              <span className="w-11 h-11 rounded-full bg-accent text-accentink grid place-items-center font-display font-extrabold text-lg">{i + 1}</span>
              <div><h3>{t}</h3><p className="text-muted text-[.98rem]">{d}</p></div>
            </Reveal>
          ))}
        </ol>
      </div></section>
      <CTA />
    </>
  );
}
