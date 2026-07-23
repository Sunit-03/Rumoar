import type { ReactNode } from "react";

const FOOTNOTE_PATTERN = /\[(\d+)\]/g;

/**
 * Renders body copy that contains inline "[n]" footnote markers as
 * linked <sup> tags pointing at #src{n} in the Sources section, so
 * content data can just embed markers instead of hand-built JSX per string.
 */
export function FootnoteText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  FOOTNOTE_PATTERN.lastIndex = 0;
  while ((match = FOOTNOTE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const num = match[1];
    parts.push(
      <sup className="fn" key={`${num}-${match.index}`}>
        <a href={`#src${num}`}>[{num}]</a>
      </sup>
    );
    lastIndex = FOOTNOTE_PATTERN.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
