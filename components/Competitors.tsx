import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Competitors({ competitors }: { competitors: RumoarContent["competitors"] }) {
  return (
    <section className="block" id="competitors">
      <div className="wrap">
        <div className="kicker">{competitors.kicker}</div>
        <h2 className="section-title">{competitors.title}</h2>
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
              {competitors.rows.map((row) => (
                <tr key={row.brand}>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="read-list">
          {competitors.reads.map((read) => (
            <p key={read.label}>
              <b className="mono" style={{ color: read.tone === "brass" ? "var(--brass)" : "var(--oxblood)" }}>
                {read.label}
              </b>{" "}
              <FootnoteText text={read.body} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
