import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";
import { TodoBlock } from "./TodoBlock";

export function Risks({ risks }: { risks: RumoarContent["risks"] }) {
  return (
    <section className="block risks" id="risks">
      <div className="wrap">
        <Reveal>
          <div className="kicker" style={{ color: "var(--oxblood)" }}>
            {risks.kicker}
          </div>
          <h2 className="section-title oxblood">{risks.title}</h2>
          <p className="lede">{risks.lede}</p>
        </Reveal>

        <div className="risk-list">
          {risks.blocks.map((block, i) => (
            <Reveal className="risk-block" key={block.num} delay={i * 80}>
              <span className="risk-num">{block.num}</span>
              <div className="risk-body">
                <b className="risk-title">{block.title}</b>
                <p>
                  <FootnoteText text={block.body} />
                </p>
                <div className="must-be-true">{block.mustBeTrue}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <TodoBlock text={risks.todo} />
      </div>
    </section>
  );
}
