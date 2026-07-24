import type { RumoarContent } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function Sourcing({ sourcing }: { sourcing: RumoarContent["sourcing"] }) {
  return (
    <section className="block" id="sourcing">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{sourcing.kicker}</div>
          <h2 className="section-title">{sourcing.title}</h2>
        </Reveal>

        <div className="argument-grid">
          {sourcing.argumentCards.map((card, i) => (
            <Reveal className="argument-card" key={card.title} delay={i * 120}>
              <h4>{card.title}</h4>
              <p>
                <FootnoteText text={card.body} />
              </p>
            </Reveal>
          ))}
        </div>

        <div className="duty-grid">
          {sourcing.dutyCards.map((card, i) => (
            <Reveal className="duty-card" key={card.title} delay={i * 120}>
              <h3>{card.title}</h3>
              <div className="stack">
                {card.segments.map((seg) => (
                  <div className={`stack-seg ${seg.variant}`} key={seg.label}>
                    <span>{seg.label}</span>
                    <span>
                      <FootnoteText text={seg.value} />
                    </span>
                  </div>
                ))}
              </div>
              <p className="note">
                <FootnoteText text={card.note} />
              </p>
            </Reveal>
          ))}
        </div>

        <div className="hub-grid">
          {sourcing.hubs.map((hub, i) => (
            <Reveal className="hub-card" key={hub.name} delay={i * 80}>
              <h4>{hub.name}</h4>
              <p>
                <FootnoteText text={hub.body} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="sub-heading mono">{sourcing.realListings.heading}</h3>
          <p className="lede">{sourcing.realListings.intro}</p>
        </Reveal>

        <div className="listings-grid">
          {sourcing.realListings.columns.map((column, i) => (
            <Reveal className="listings-column" key={column.category} delay={i * 100}>
              <h4 className="listings-category mono">{column.category}</h4>
              {column.listings.map((listing) => (
                <div className="listing-item" key={listing.name}>
                  <b>{listing.name}</b>
                  {listing.highlight && <p className="listing-highlight mono">{listing.highlight}</p>}
                  <p>
                    <FootnoteText text={listing.body} />
                  </p>
                  {listing.lowConfidence && (
                    <span className="confidence-tag mono">Lower confidence — {listing.lowConfidence}</span>
                  )}
                </div>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="lede">
          {sourcing.realListings.read}
        </Reveal>
      </div>
    </section>
  );
}
