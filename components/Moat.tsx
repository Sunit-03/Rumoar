import type { MoatTag, RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

function tagClass(tag: MoatTag): string {
  return tag === "THE ONLY BUILDABLE MOAT" ? "yes" : "no";
}

export function Moat({ moat }: { moat: RumoarContent["moat"] }) {
  return (
    <section className="block" id="moat">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{moat.kicker}</div>
          <h2 className="section-title">{moat.title}</h2>
        </Reveal>
        <div className="moat-grid">
          {moat.cards.map((card, i) => (
            <Reveal className="moat-card" key={card.title} delay={i * 90}>
              <span className={`moat-tag ${tagClass(card.tag)} mono`}>{card.tag}</span>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
