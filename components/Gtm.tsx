import type { RumoarContent } from "@/data/types";
import { EvidenceDeck } from "./EvidenceDeck";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Gtm({ gtm }: { gtm: RumoarContent["gtm"] }) {
  return (
    <section className="block tight" id="gtm">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{gtm.kicker}</div>
          <h2 className="section-title">{gtm.title}</h2>
        </Reveal>

        <div className="gtm-grid two">
          {gtm.cards.map((card, i) => (
            <Reveal className="gtm-card" key={card.title} delay={i * 90}>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="sub-heading mono">{gtm.voiceOfCustomer.title}</h3>
          <p className="lede">{gtm.voiceOfCustomer.opening}</p>
        </Reveal>

        <EvidenceDeck shots={gtm.voiceOfCustomer.screenshots} />

        <Reveal as="p" className="lede">
          {gtm.voiceOfCustomer.closing}
        </Reveal>
      </div>
    </section>
  );
}
