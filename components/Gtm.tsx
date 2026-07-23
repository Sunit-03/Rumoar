import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";
import { TodoBlock } from "./TodoBlock";

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

        <TodoBlock text={gtm.todo} />
      </div>
    </section>
  );
}
