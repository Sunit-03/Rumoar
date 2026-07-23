"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type Tag = "div" | "li" | "tr" | "p" | "article";

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView();

  return createElement(
    as,
    {
      ref,
      className: `reveal${inView ? " in-view" : ""}${className ? ` ${className}` : ""}`,
      style: delay ? { ...style, transitionDelay: `${delay}ms` } : style,
    },
    children
  );
}
