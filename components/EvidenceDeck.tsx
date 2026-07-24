"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { EvidenceScreenshot } from "@/data/types";
import { FootnoteText } from "./FootnoteText";

const INTERVAL_MS = 4200;

export function EvidenceDeck({ shots }: { shots: EvidenceScreenshot[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || shots.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % shots.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, shots.length]);

  return (
    <div
      className="evidence-deck"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="evidence-deck-stack">
        {shots.map((shot, i) => {
          const offset = (i - index + shots.length) % shots.length;
          return (
            <div
              className="evidence-deck-card"
              key={shot.label}
              style={{
                zIndex: shots.length - offset,
                transform: `translate(${offset * 10}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
                opacity: offset < 3 ? 1 - offset * 0.32 : 0,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <div className="evidence-deck-card-img">
                {shot.src ? (
                  <Image src={shot.src} alt={shot.label} fill sizes="(max-width: 720px) 100vw, 460px" />
                ) : (
                  shot.label
                )}
              </div>
              <p className="evidence-deck-card-caption">
                <FootnoteText text={shot.caption} />
              </p>
            </div>
          );
        })}
      </div>

      <div className="evidence-deck-dots">
        {shots.map((shot, i) => (
          <button
            aria-label={`Show ${shot.label}`}
            className={`evidence-deck-dot${i === index ? " is-active" : ""}`}
            key={shot.label}
            onClick={() => setIndex(i)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
