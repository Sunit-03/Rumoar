import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";
import { TodoBlock } from "./TodoBlock";

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
                {competitors.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.rows.map((row, i) => (
                <Reveal as="tr" key={row.brand} delay={Math.min(i * 60, 300)}>
                  <td className="brandname">{row.brand}</td>
                  <td className="figure wrap-cell">
                    <FootnoteText text={row.numbers} />
                  </td>
                  <td>
                    {row.read && <FootnoteText text={row.read} />}
                    {row.todo && <TodoBlock text={row.todo} compact />}
                  </td>
                </Reveal>
              ))}
            </tbody>
          </table>
        </div>

        <Reveal className="callout">
          <b>{competitors.closingLabel}</b> <FootnoteText text={competitors.closing} />
        </Reveal>
      </div>
    </section>
  );
}
