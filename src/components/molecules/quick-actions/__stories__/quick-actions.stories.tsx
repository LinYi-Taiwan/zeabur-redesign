import type { Meta, StoryObj } from "@storybook/react";
import { QuickActions } from "../quick-actions";

const meta = {
  title: "Molecules/QuickActions",
  component: QuickActions,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QuickActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
