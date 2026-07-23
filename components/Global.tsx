import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Global({ global }: { global: RumoarContent["global"] }) {
  return (
    <section className="block" id="global">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{global.kicker}</div>
          <h2 className="section-title">{global.title}</h2>
        </Reveal>

        <div className="bottom-up-grid">
          {global.stats.map((stat, i) => (
            <Reveal className="stat-card" key={stat.big} delay={i * 90}>
              <span className="big mono">{stat.big}</span>
              <FootnoteText text={stat.body} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="bullet-list">
            {global.bullets.map((b) => (
              <li key={b}>
                <FootnoteText text={b} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <span className="assumption-tag">{global.readsLabel}</span>
        </Reveal>
        <div className="read-cards">
          {global.reads.map((read, i) => (
            <Reveal className="read-card" key={read.title} delay={i * 100}>
              <span className="read-num mono">READ 0{i + 1}</span>
              <b>{read.title}</b>
              <p>{read.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
