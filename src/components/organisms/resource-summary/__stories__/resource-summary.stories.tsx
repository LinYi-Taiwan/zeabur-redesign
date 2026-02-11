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
FullGrid.storyName = "2x2 Metric Grid";
