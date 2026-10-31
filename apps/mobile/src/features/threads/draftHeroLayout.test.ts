import { describe, expect, it } from "vite-plus/test";

import { resolveDraftHeroVariant } from "./draftHeroLayout";

describe("resolveDraftHeroVariant", () => {
  it("keeps the full hero while it fits", () => {
    expect(resolveDraftHeroVariant(180)).toBe("full");
  });

  it("keeps the project control when a tall composer squeezes the hero", () => {
    expect(resolveDraftHeroVariant(179)).toBe("compact");
    expect(resolveDraftHeroVariant(52)).toBe("compact");
  });

  it("hides the hero only when even the project control cannot fit", () => {
    expect(resolveDraftHeroVariant(51)).toBe("hidden");
  });
});
