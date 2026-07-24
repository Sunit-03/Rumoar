import type { EvidenceScreenshot } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";

export function EvidenceShot({ shot, delay = 0 }: { shot: EvidenceScreenshot; delay?: number }) {
  return (
    <Reveal className="evidence-shot" delay={delay}>
      <div className="evidence-shot-img">
        {shot.src ? (
          // eslint-disable-next-line @next/next/no-img-element -- natural size varies per screenshot, no fixed box to fill
          <img alt={shot.label} loading="lazy" src={shot.src} />
        ) : (
          shot.label
        )}
      </div>
      <p className="evidence-caption">
        <FootnoteText text={shot.caption} />
      </p>
    </Reveal>
  );
}
