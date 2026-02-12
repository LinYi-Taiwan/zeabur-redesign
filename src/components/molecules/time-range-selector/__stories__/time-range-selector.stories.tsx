import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimeRangeSelector, TimeRange } from "../time-range-selector";

const meta: Meta<typeof TimeRangeSelector> = {
  title: "Molecules/TimeRangeSelector",
  component: TimeRangeSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimeRangeSelector>;

export const Default: Story = {
  args: {
    value: "12h",
    onChange: (range) => console.log("Selected:", range),
  },
};

export const OneHour: Story = {
  args: {
    value: "1h",
    onChange: (range) => console.log("Selected:", range),
  },
};

export const SixHours: Story = {
  args: {
    value: "6h",
    onChange: (range) => console.log("Selected:", range),
  },
};

export const TwentyFourHours: Story = {
  args: {
    value: "24h",
    onChange: (range) => console.log("Selected:", range),
  },
};

export const SevenDays: Story = {
  args: {
    value: "7d",
    onChange: (range) => console.log("Selected:", range),
  },
};

export const Interactive: Story = {
  render: () => {
    const [timeRange, setTimeRange] = useState<TimeRange>("12h");

    return (
      <div className="flex flex-col items-center gap-4">
        <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
        <p className="text-sm text-muted-foreground">
          Selected: <span className="font-mono font-semibold">{timeRange}</span>
        </p>
      </div>
    );
  },
};
