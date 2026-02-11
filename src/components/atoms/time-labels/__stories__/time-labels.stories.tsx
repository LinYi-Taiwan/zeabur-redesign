import type { Meta, StoryObj } from "@storybook/react";
import { TimeLabels } from "../time-labels";

const meta = {
  title: "Atoms/TimeLabels",
  component: TimeLabels,
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
} satisfies Meta<typeof TimeLabels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
