import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResourceSummary } from "./resource-summary";

describe("ResourceSummary", () => {
  it("renders all 4 metric cards", () => {
    render(<ResourceSummary />);

    expect(screen.getByText("CPU 使用率")).toBeInTheDocument();
    expect(screen.getByText("記憶體使用量")).toBeInTheDocument();
    expect(screen.getByText("預估月費")).toBeInTheDocument();
    expect(screen.getByText("網路流量")).toBeInTheDocument();
  });

  it("uses default 12h time range when no prop provided", () => {
    const { container } = render(<ResourceSummary />);
    expect(container).toMatchSnapshot();
  });

  it("accepts and uses timeRange prop", () => {
    const { container } = render(<ResourceSummary timeRange="24h" />);
    // Snapshot will capture different data based on time range
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with 1h time range", () => {
    const { container } = render(<ResourceSummary timeRange="1h" />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with 6h time range", () => {
    const { container } = render(<ResourceSummary timeRange="6h" />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with 7d time range", () => {
    const { container } = render(<ResourceSummary timeRange="7d" />);
    expect(container).toMatchSnapshot();
  });
});
