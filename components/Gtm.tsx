import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Gtm({ gtm }: { gtm: RumoarContent["gtm"] }) {
  return (
    <section className="block tight" id="gtm">
      <div className="wrap">
        <div className="kicker">{gtm.kicker}</div>
        <h2 className="section-title">{gtm.title}</h2>
        <p className="positioning">{gtm.positioning}</p>

        <div className="gtm-grid">
          {gtm.cards.map((card) => (
            <div className="gtm-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </div>
          ))}
        </div>
        <p className="ai-note">
          <FootnoteText text={gtm.aiNote} />
        </p>
      </div>
    </section>
  );
}
