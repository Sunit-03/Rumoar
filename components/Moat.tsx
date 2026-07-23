import type { MoatTag, RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

function tagClass(tag: MoatTag): string {
  return tag === "THE ONLY BUILDABLE MOAT" ? "yes" : "no";
}

export function Moat({ moat }: { moat: RumoarContent["moat"] }) {
  return (
    <section className="block" id="moat">
      <div className="wrap">
        <div className="kicker">{moat.kicker}</div>
        <h2 className="section-title">{moat.title}</h2>
        <div className="moat-grid">
          {moat.cards.map((card) => (
            <div className="moat-card" key={card.title}>
              <span className={`moat-tag ${tagClass(card.tag)} mono`}>{card.tag}</span>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
