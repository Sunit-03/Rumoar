import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

export function Product({ product }: { product: RumoarContent["product"] }) {
  return (
    <section className="block tight" id="product">
      <div className="wrap">
        <div className="kicker">{product.kicker}</div>
        <h2 className="section-title">{product.title}</h2>
        <ul className="principles">
          {product.principles.map((p) => (
            <li className="principle" key={p.num}>
              <span className="pnum">{p.num}</span>
              <p>
                <FootnoteText text={p.body} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
