import type { Meta, StoryObj } from "@storybook/react";
import { UpgradeBanner } from "./upgrade-banner";

const meta = {
  title: "Components/UpgradeBanner",
  component: UpgradeBanner,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 900 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UpgradeBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
