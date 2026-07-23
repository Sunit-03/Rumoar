import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Verdict({ verdict }: { verdict: RumoarContent["verdict"] }) {
  return (
    <section className="block" id="verdict">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{verdict.kicker}</div>
          <h2 className="section-title">{verdict.title}</h2>
        </Reveal>
        <Reveal className="tldr-card">
          <p>
            <FootnoteText text={verdict.body} />
          </p>
        </Reveal>
        <div className="conditions">
          {verdict.conditions.map((c, i) => (
            <Reveal className="cond-card" key={c.num} delay={i * 90}>
              <span className="cond-num mono">{c.num}</span>
              <b>{c.title}</b>
              <p>
                <FootnoteText text={c.body} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
