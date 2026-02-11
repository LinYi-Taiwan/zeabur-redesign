import type { Meta, StoryObj } from "@storybook/react";
import { CostEstimator } from "./cost-estimator";

const meta = {
  title: "Components/CostEstimator",
  component: CostEstimator,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CostEstimator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
