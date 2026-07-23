import type { RumoarContent } from "@/data/types";

export function Hero({ hero }: { hero: RumoarContent["hero"] }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1 className="headline display">{hero.headline}</h1>
        <p className="subhead">{hero.subhead}</p>
        <div className="verdict-chip mono">
          <b>{hero.verdictChipBold}</b> {hero.verdictChipRest}
        </div>
      </div>
    </section>
  );
}
