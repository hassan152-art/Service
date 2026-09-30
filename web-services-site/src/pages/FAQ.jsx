import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import { faqs } from "../config.js";

export default function FAQ() {
  return (
    <>
      <PageHeader title="Common questions" text="Can't find your answer? Message me on WhatsApp and I reply the same day." />
      <section className="pb-6"><div className="wrap max-w-[780px]">
        {faqs.map(([q, a], i) => (
          <Reveal key={q} delay={i * 60}>
            <details className="bg-surface border border-line rounded-xl px-5 py-4 mt-3">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="text-muted mt-2.5">{a}</p>
            </details>
          </Reveal>
        ))}
      </div></section>
      <CTA />
    </>
  );
}
