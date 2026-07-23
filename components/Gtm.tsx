import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Gtm({ gtm }: { gtm: RumoarContent["gtm"] }) {
  return (
    <section className="block tight" id="gtm">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{gtm.kicker}</div>
          <h2 className="section-title">{gtm.title}</h2>
          <p className="positioning">{gtm.positioning}</p>
        </Reveal>

        <div className="gtm-grid">
          {gtm.cards.map((card, i) => (
            <Reveal className="gtm-card" key={card.title} delay={i * 90}>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="ai-note">
          <FootnoteText text={gtm.aiNote} />
        </Reveal>
      </div>
    </section>
  );
}
