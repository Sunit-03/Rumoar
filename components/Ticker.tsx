import type { TickerItem } from "@/data/types";

export function Ticker({ items }: { items: TickerItem[] }) {
  return (
    <div className="ticker-outer" tabIndex={0} aria-label="Evidence ticker, pauses on hover or focus">
      <div className="ticker-track">
        {[0, 1].map((rep) =>
          items.map((item, i) => (
            <span className="ticker-item" key={`${rep}-${i}`}>
              {item.text}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
