import type { Meta, StoryObj } from "@storybook/react";
import { MiniAreaChart } from "../mini-area-chart";

const sampleData = Array.from({ length: 60 }, (_, i) =>
  15 + Math.sin(i / 8) * 10 + Math.cos(i / 5) * 5
);

const meta = {
  title: "Atoms/MiniAreaChart",
  component: MiniAreaChart,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 540 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MiniAreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#D0BCFF",
    gradientId: "primaryGrad",
    data: sampleData,
  },
};

export const Tertiary: Story = {
  args: {
    color: "#7DD87E",
    gradientId: "tertiaryGrad",
    data: sampleData.map((v) => v * 2),
  },
};

export const Warning: Story = {
  args: {
    color: "#F5C344",
    gradientId: "warningGrad",
    data: sampleData.map((_, i) => 0.3 + Math.exp(-((i - 30) ** 2) / 200) * 0.9),
  },
};
