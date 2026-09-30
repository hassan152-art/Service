import { Avatar } from "../components/Art.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { CONFIG, skills, testimonials } from "../config.js";

export default function About() {
  return (
    <>
      <PageHeader title="About me" />
      <section className="pb-6"><div className="wrap grid gap-12 items-center md:grid-cols-[320px_1fr] mt-4">
        <Reveal className="rounded-3xl overflow-hidden border border-line aspect-square max-w-[320px] w-full">
          {CONFIG.photo ? <img src={CONFIG.photo} alt={CONFIG.name} className="w-full h-full object-cover" /> : <Avatar />}
        </Reveal>
        <Reveal delay={150}>
          <h2 className="!text-3xl">Hi, I'm {CONFIG.name}</h2>
          <p className="lead">I'm a web developer who builds websites for people who want a clear result without technical talk. I answer fast, explain things simply and deliver on the date we agree.</p>
          <div className="mt-6 grid gap-4">
            {skills.map(([n, v]) => (
              <Reveal key={n}>
                <div className="flex justify-between text-sm font-semibold mb-1.5"><span>{n}</span><span>{v}%</span></div>
                <div className="h-2.5 rounded-full bg-line overflow-hidden"><div className="bar-fill h-full rounded-full bg-accent" style={{ width: `${v}%` }} /></div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div></section>
      <section className="sec"><div className="wrap">
        <Reveal><h2>What clients say</h2></Reveal>
        <div className="grid3">
          {testimonials.map(([q, n, r], i) => (
            <Reveal key={i} delay={i * 120}>
              <blockquote className="card lift m-0 h-full"><p className="!text-ink !mt-0">"{q}"</p><footer className="mt-4 font-semibold text-[.95rem]">{n}<span className="block font-normal text-muted">{r}</span></footer></blockquote>
            </Reveal>
          ))}
        </div>
      </div></section>
      <CTA />
    </>
  );
}
