import type { RumoarContent } from "@/data/types";
import { EvidenceShot } from "./EvidenceShot";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Moat({ moat }: { moat: RumoarContent["moat"] }) {
  return (
    <section className="block" id="moat">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{moat.kicker}</div>
          <h2 className="section-title">{moat.title}</h2>
        </Reveal>

        <Reveal className="tldr-card">
          <p>
            <FootnoteText text={moat.opening} />
          </p>
        </Reveal>

        <Reveal>
          <h3 className="sub-heading mono">{moat.whyNowHeading}</h3>
          <p className="lede">
            <FootnoteText text={moat.whyNowBody} />
          </p>
        </Reveal>

        <div className="evidence-grid">
          {moat.whyNowScreenshots.map((shot, i) => (
            <EvidenceShot shot={shot} delay={i * 100} key={shot.label} />
          ))}
        </div>

        <Reveal as="p" className="lede">
          <FootnoteText text={moat.whyNowClosing} />
        </Reveal>

        <Reveal>
          <h3 className="sub-heading mono">{moat.flywheelHeading}</h3>
        </Reveal>
        <div className="flywheel">
          {moat.flywheel.map((step, i) => (
            <Reveal className="fly-step" key={step.title} delay={i * 120}>
              <span className="fly-num mono">0{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="fly-loop mono">
          {moat.flywheelLoop}
        </Reveal>

        <Reveal>
          <h3 className="sub-heading mono">{moat.timelineHeading}</h3>
          <p className="lede">{moat.timelineIntro}</p>
        </Reveal>

        <div className="timeline">
          {moat.timeline.map((step, i) => (
            <Reveal className="tl-step" key={step.label} delay={i * 140}>
              <span className="tl-label mono">{step.label}</span>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="why-grid">
          {moat.whyCards.map((card, i) => (
            <Reveal className="why-card" key={card.title} delay={i * 100}>
              <b>{card.title}</b>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="callout">
          <b>The discount rule:</b> {moat.discountCallout}
        </Reveal>
      </div>
    </section>
  );
}
