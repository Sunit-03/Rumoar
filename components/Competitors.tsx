import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Competitors({ competitors }: { competitors: RumoarContent["competitors"] }) {
  return (
    <section className="block" id="competitors">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{competitors.kicker}</div>
          <h2 className="section-title">{competitors.title}</h2>
        </Reveal>
        <div className="table-scroll">
          <table className="compare">
            <thead>
              <tr>
                <th>Brand</th>
                <th>FY25 revenue</th>
                <th>YoY</th>
                <th>P&amp;L</th>
                <th>Raised</th>
                <th>Signal</th>
              </tr>
            </thead>
            <tbody>
              {competitors.rows.map((row, i) => (
                <Reveal as="tr" key={row.brand} delay={Math.min(i * 60, 300)}>
                  <td className="brandname">{row.brand}</td>
                  <td className="figure">
                    <FootnoteText text={row.revenue} />
                  </td>
                  <td className="figure">{row.yoy}</td>
                  <td>{row.pnl}</td>
                  <td className="mono-cell">{row.raised}</td>
                  <td>
                    <FootnoteText text={row.signal} />
                  </td>
                </Reveal>
              ))}
            </tbody>
          </table>
        </div>

        <div className="read-list">
          {competitors.reads.map((read, i) => (
            <Reveal as="p" key={read.label} delay={i * 80}>
              <b className="mono" style={{ color: read.tone === "brass" ? "var(--brass)" : "var(--oxblood)" }}>
                {read.label}
              </b>{" "}
              <FootnoteText text={read.body} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
