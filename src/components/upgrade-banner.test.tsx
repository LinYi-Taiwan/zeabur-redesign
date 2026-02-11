import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UpgradeBanner } from "./upgrade-banner";

describe("UpgradeBanner", () => {
  describe("Snapshot Tests", () => {
    it("renders upgrade banner correctly", () => {
      const { container } = render(<UpgradeBanner />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Behavior Tests", () => {
    it("displays the upgrade title", () => {
      const { getByText } = render(<UpgradeBanner />);
      expect(getByText("升級方案，解鎖更多資源")).toBeInTheDocument();
    });

    it("displays the upgrade description", () => {
      const { getByText } = render(<UpgradeBanner />);
      expect(
        getByText("目前記憶體用量接近上限，升級 Developer 方案可獲得 512MB 記憶體與更多 CPU 配額")
      ).toBeInTheDocument();
    });

    it("displays the CTA button", () => {
      const { getByText } = render(<UpgradeBanner />);
      expect(getByText("升級方案")).toBeInTheDocument();
    });
  });
});
