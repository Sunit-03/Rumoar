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
        <span className="assumption-tag">{market.funnelAssumption}</span>

        <p className="lede" style={{ marginTop: 36 }}>
          {market.reconciliationIntro}
        </p>

        <div className="bottom-up-grid">
          {market.bottomUp.slice(0, 2).map((stat, i) => (
            <Reveal className="stat-card" key={stat.big} delay={i * 90}>
              <span className="big mono">{stat.big}</span>
              {stat.body}
              {stat.assumption && <span className="assumption-tag">{stat.assumption}</span>}
            </Reveal>
          ))}
        </div>
        {market.bottomUp.slice(2).map((stat) => (
          <Reveal className="stat-card standalone" key={stat.big} delay={180}>
            <span className="big mono">{stat.big}</span>
            {stat.body}
            {stat.assumption && <span className="assumption-tag">{stat.assumption}</span>}
          </Reveal>
        ))}

        <Reveal className="callout">
          <b>Reconciliation:</b> <FootnoteText text={market.reconciliation} />
        </Reveal>
      </div>
    </section>
  );
}
