import type { Meta, StoryObj } from "@storybook/react";
import { StatusOverview } from "../status-overview";

const meta = {
  title: "Organisms/StatusOverview",
  component: StatusOverview,
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
} satisfies Meta<typeof StatusOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Running: Story = {};
