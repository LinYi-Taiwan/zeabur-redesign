import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CostEstimator } from "../cost-estimator";

describe("CostEstimator", () => {
  describe("Snapshot Tests", () => {
    it("renders cost breakdown table correctly", () => {
      const { container } = render(<CostEstimator />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Behavior Tests", () => {
    it("displays all cost breakdown rows", () => {
      const { getByText } = render(<CostEstimator />);
      expect(getByText("CPU")).toBeInTheDocument();
      expect(getByText("記憶體")).toBeInTheDocument();
      expect(getByText("網路流量")).toBeInTheDocument();
    });

    it("displays the total amount", () => {
      const { getByText } = render(<CostEstimator />);
      expect(getByText("預估月費合計")).toBeInTheDocument();
      expect(getByText("$1.33")).toBeInTheDocument();
    });

    it("displays the billing link", () => {
      const { getByText } = render(<CostEstimator />);
      expect(getByText("查看完整帳單 →")).toBeInTheDocument();
    });

    it("shows free label for network", () => {
      const { getByText } = render(<CostEstimator />);
      expect(getByText("免費")).toBeInTheDocument();
    });
  });
});
