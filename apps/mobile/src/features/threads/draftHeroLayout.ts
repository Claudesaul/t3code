const FULL_HERO_MIN_HEIGHT = 180;
// The 44pt project control plus the compact hero's vertical padding.
const COMPACT_HERO_MIN_HEIGHT = 52;

export type DraftHeroVariant = "full" | "compact" | "hidden";

/** A long prompt must not take away the only way to see or change the draft's project. */
export function resolveDraftHeroVariant(availableHeight: number): DraftHeroVariant {
  if (availableHeight >= FULL_HERO_MIN_HEIGHT) return "full";
  return availableHeight >= COMPACT_HERO_MIN_HEIGHT ? "compact" : "hidden";
}
