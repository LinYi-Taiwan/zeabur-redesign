import type { Meta, StoryObj } from "@storybook/react";
import { ResourceSummary } from "../resource-summary";

const meta = {
  title: "Organisms/ResourceSummary",
  component: ResourceSummary,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResourceSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullGrid: Story = {};
FullGrid.storyName = "2x2 Metric Grid (Default 12h)";

export const With1HourRange: Story = {
  args: {
    timeRange: "1h",
  },
};
With1HourRange.storyName = "With 1 Hour Range";

export const With6HourRange: Story = {
  args: {
    timeRange: "6h",
  },
};
With6HourRange.storyName = "With 6 Hour Range";

export const With24HourRange: Story = {
  args: {
    timeRange: "24h",
  },
};
With24HourRange.storyName = "With 24 Hour Range";

export const With7DayRange: Story = {
  args: {
    timeRange: "7d",
  },
};
With7DayRange.storyName = "With 7 Day Range";
