import { content } from "@/data/content";
import type { RumoarContent } from "@/data/types";

/**
 * Single seam between the page and its content. Today this resolves the
 * local data file; swapping to a CMS or API later means changing this
 * function only, not every component that renders content.
 */
export async function getContent(): Promise<RumoarContent> {
  return content;
}
