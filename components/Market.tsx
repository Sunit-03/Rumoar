import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Market({ market }: { market: RumoarContent["market"] }) {
  return (
    <section className="block" id="market">
      <div className="wrap">
        <div className="kicker">{market.kicker}</div>
        <h2 className="section-title">{market.title}</h2>
        <p className="lede">{market.lede}</p>

        <div className="funnel">
          {market.funnel.map((step) => (
            <div className="funnel-row" key={step.label}>
              <div className="funnel-label mono">{step.label}</div>
              <div className="funnel-bar-wrap">
                <div className="funnel-bar" style={{ width: `${step.widthPct}%` }}>
                  {step.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="assumption-tag">{market.funnelAssumption}</span>

        <p className="lede" style={{ marginTop: 36 }}>
          {market.reconciliationIntro}
        </p>

        <div className="bottom-up-grid">
          {market.bottomUp.slice(0, 2).map((stat) => (
            <div className="stat-card" key={stat.big}>
              <span className="big mono">{stat.big}</span>
              {stat.body}
              {stat.assumption && <span className="assumption-tag">{stat.assumption}</span>}
            </div>
          ))}
        </div>
        {market.bottomUp.slice(2).map((stat) => (
          <div className="stat-card" style={{ marginBottom: 36 }} key={stat.big}>
            <span className="big mono">{stat.big}</span>
            {stat.body}
            {stat.assumption && <span className="assumption-tag">{stat.assumption}</span>}
          </div>
        ))}

        <div className="callout">
          <b>Reconciliation:</b> <FootnoteText text={market.reconciliation} />
        </div>
      </div>
    </section>
  );
}
