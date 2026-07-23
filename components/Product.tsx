import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Product({ product }: { product: RumoarContent["product"] }) {
  return (
    <section className="block tight" id="product">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{product.kicker}</div>
          <h2 className="section-title">{product.title}</h2>
        </Reveal>
        <ul className="principles">
          {product.principles.map((p, i) => (
            <Reveal as="li" className="principle" key={p.num} delay={i * 80}>
              <span className="pnum">{p.num}</span>
              <p>
                <FootnoteText text={p.body} />
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
