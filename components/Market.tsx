import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { FunnelBar } from "./FunnelBar";
import { Reveal } from "./Reveal";

export function Market({ market }: { market: RumoarContent["market"] }) {
  return (
    <section className="block" id="market">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{market.kicker}</div>
          <h2 className="section-title">{market.title}</h2>
          <p className="lede">{market.lede}</p>
        </Reveal>

        <div className="funnel">
          {market.funnel.map((step, i) => (
            <FunnelBar
              key={step.label}
              label={step.label}
              value={step.value}
              widthPct={step.widthPct}
              delay={i * 150}
            />
          ))}
        </div>
        <span className="assumption-tag">{market.funnelNote}</span>

        <div className="bottom-up-grid three" style={{ marginTop: 36 }}>
          {market.stats.map((stat, i) => (
            <Reveal className="stat-card" key={stat.big} delay={i * 90}>
              <span className="big mono">{stat.big}</span>
              <FootnoteText text={stat.body} />
              {stat.assumption && <span className="assumption-tag">{stat.assumption}</span>}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="bullet-list">
            {market.bullets.map((b) => (
              <li key={b}>
                <FootnoteText text={b} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="callout">
          <b>The incumbent layer:</b>{" "}
          {market.incumbents.replace(/^The incumbent layer:\s*/, "")}
        </Reveal>

        <Reveal
          as="p"
          className="scope-note mono"
          style={{ marginTop: "clamp(2rem, 5vw, 5rem)" }}
        >
          {market.scopeNote}
        </Reveal>
      </div>
    </section>
  );
}
