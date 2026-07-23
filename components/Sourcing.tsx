import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Sourcing({ sourcing }: { sourcing: RumoarContent["sourcing"] }) {
  return (
    <section className="block" id="sourcing">
      <div className="wrap">
        <div className="kicker">{sourcing.kicker}</div>
        <h2 className="section-title">{sourcing.title}</h2>

        <div className="duty-grid">
          {sourcing.dutyCards.map((card) => (
            <div className="duty-card" key={card.title}>
              <h3>{card.title}</h3>
              <div className="stack">
                {card.segments.map((seg) => (
                  <div className={`stack-seg ${seg.variant}`} key={seg.label}>
                    <span>{seg.label}</span>
                    <span>
                      <FootnoteText text={seg.value} />
                    </span>
                  </div>
                ))}
              </div>
              <p className="note">
                <FootnoteText text={card.note} />
              </p>
            </div>
          ))}
        </div>

        <div className="hub-grid">
          {sourcing.hubs.map((hub) => (
            <div className="hub-card" key={hub.name}>
              <h4>{hub.name}</h4>
              <p>
                <FootnoteText text={hub.body} />
              </p>
            </div>
          ))}
        </div>

        <div className="callout">
          <b>When the math flips:</b> <FootnoteText text={sourcing.flipCallout} />
        </div>
      </div>
    </section>
  );
}
