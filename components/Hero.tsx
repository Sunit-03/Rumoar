import type { RumoarContent } from "@/data/types";

export function Hero({ hero }: { hero: RumoarContent["hero"] }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow enter-1">{hero.eyebrow}</div>
        <h1 className="headline display enter-2">{hero.headline}</h1>
        <p className="subhead enter-3">{hero.subhead}</p>
        <div className="verdict-chip mono enter-4">
          <b>{hero.verdictChipBold}</b> {hero.verdictChipRest}
        </div>
      </div>
    </section>
  );
}
