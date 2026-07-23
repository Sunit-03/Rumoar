"use client";

import { useInView } from "@/lib/use-in-view";
import { FootnoteText } from "./FootnoteText";

export function FunnelBar({
  label,
  value,
  widthPct,
  delay = 0,
}: {
  label: string;
  value: string;
  widthPct: number;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.3);

  return (
    <div className="funnel-row" ref={ref}>
      <div className="funnel-label mono">{label}</div>
      <div className="funnel-bar-wrap">
        <div
          className="funnel-bar"
          style={{
            width: inView ? `${widthPct}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        >
          <span className="funnel-bar-value" style={{ opacity: inView ? 1 : 0, transitionDelay: `${delay + 500}ms` }}>
            <FootnoteText text={value} />
          </span>
        </div>
      </div>
    </div>
  );
}
