"use client";

import { createElement, type ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type Tag = "div" | "li" | "tr" | "p" | "article";

export function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
}) {
  const { ref, inView } = useInView();

  return createElement(
    as,
    {
      ref,
      className: `reveal${inView ? " in-view" : ""}${className ? ` ${className}` : ""}`,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
