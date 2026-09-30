import Reveal from "./Reveal.jsx";
export default function PageHeader({ title, text }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-8">
      <div className="blob bg-soft w-72 h-72 -top-24 -right-16" />
      <div className="wrap relative">
        <h1 className="!text-[clamp(2.2rem,6vw,3.8rem)]">{title.split(" ").map((w, i) => <span key={i} className="rise mr-[.25em]" style={{ "--d": `${i * 90}ms` }}>{w}</span>)}</h1>
        {text && <Reveal delay={200}><p className="lead text-lg">{text}</p></Reveal>}
      </div>
    </section>
  );
}
