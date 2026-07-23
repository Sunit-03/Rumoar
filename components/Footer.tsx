import type { RumoarContent } from "@/data/types";

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
        <p className="footer-line">{footer.line}</p>

        <div className="sources">
          <ol>
            {sources.map((s) => (
              <li key={s.num} id={`src${s.num}`}>
                <span className="num">[{s.num}]</span>
                {s.text}
              </li>
            ))}
          </ol>
        </div>

        <p className="disclaimer">{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
