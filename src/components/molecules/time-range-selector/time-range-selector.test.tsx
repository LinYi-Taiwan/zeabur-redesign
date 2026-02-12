import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TimeRangeSelector } from "./time-range-selector";

describe("TimeRangeSelector", () => {
  it("renders all 5 time range buttons", () => {
    const onChange = vi.fn();
    render(<TimeRangeSelector value="12h" onChange={onChange} />);

    expect(screen.getByText("1H")).toBeInTheDocument();
    expect(screen.getByText("6H")).toBeInTheDocument();
    expect(screen.getByText("12H")).toBeInTheDocument();
    expect(screen.getByText("24H")).toBeInTheDocument();
    expect(screen.getByText("7D")).toBeInTheDocument();
  });

  it("highlights the selected time range", () => {
    const onChange = vi.fn();
    render(<TimeRangeSelector value="24h" onChange={onChange} />);

    const selectedButton = screen.getByText("24H");
    expect(selectedButton).toHaveClass("bg-card", "text-foreground", "shadow-sm");
  });

  it("calls onChange when a button is clicked", () => {
    const onChange = vi.fn();
    render(<TimeRangeSelector value="12h" onChange={onChange} />);

    const button = screen.getByText("7D");
    fireEvent.click(button);

    expect(onChange).toHaveBeenCalledWith("7d");
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange with correct value for each button", () => {
    const onChange = vi.fn();
    render(<TimeRangeSelector value="12h" onChange={onChange} />);

    fireEvent.click(screen.getByText("1H"));
    expect(onChange).toHaveBeenLastCalledWith("1h");

    fireEvent.click(screen.getByText("6H"));
    expect(onChange).toHaveBeenLastCalledWith("6h");

    fireEvent.click(screen.getByText("24H"));
    expect(onChange).toHaveBeenLastCalledWith("24h");
  });

  it("matches snapshot with default selection", () => {
    const onChange = vi.fn();
    const { container } = render(
      <TimeRangeSelector value="12h" onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with 7d selection", () => {
    const onChange = vi.fn();
    const { container } = render(
      <TimeRangeSelector value="7d" onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
