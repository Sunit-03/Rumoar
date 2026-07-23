import type { RumoarContent } from "@/data/types";
import { Reveal } from "./Reveal";

export function Footer({
  footer,
  sources,
}: {
  footer: RumoarContent["footer"];
  sources: RumoarContent["sources"];
}) {
  return (
    <footer id="sources">
      <div className="wrap">
        <Reveal as="p" className="footer-line">
          {footer.line}
        </Reveal>

        <Reveal className="sources">
          <ol>
            {sources.map((s) => (
              <li key={s.num} id={`src${s.num}`}>
                <span className="num">[{s.num}]</span>
                {s.text}
                {s.url && (
                  <>
                    {" "}
                    —{" "}
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      source ↗
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="disclaimer">{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
