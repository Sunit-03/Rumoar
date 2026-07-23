"use client";

import { useEffect, useState } from "react";
import type { NavSection } from "@/data/types";

export function Nav({ sections }: { sections: NavSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    function onScroll() {
      const pos = window.scrollY + 120;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= pos) current = s.id;
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <span className="brandmark">RUMOAR/</span>
        <nav className="links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={activeId === s.id ? "active" : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
