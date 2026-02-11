import type { Meta, StoryObj } from "@storybook/react";
import { ResourceChart } from "../resource-chart";

const meta = {
  title: "Organisms/ResourceChart",
  component: ResourceChart,
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
} satisfies Meta<typeof ResourceChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
