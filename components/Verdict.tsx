import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Verdict({ verdict }: { verdict: RumoarContent["verdict"] }) {
  return (
    <section className="block" id="verdict">
      <div className="wrap">
        <div className="kicker">{verdict.kicker}</div>
        <h2 className="section-title">{verdict.title}</h2>
        <div className="tldr-card">
          <p>
            <FootnoteText text={verdict.body} />
          </p>
        </div>
        <div className="conditions">
          {verdict.conditions.map((c) => (
            <div className="cond-card" key={c.num}>
              <span className="cond-num mono">{c.num}</span>
              <b>{c.title}</b>
              <p>
                <FootnoteText text={c.body} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
