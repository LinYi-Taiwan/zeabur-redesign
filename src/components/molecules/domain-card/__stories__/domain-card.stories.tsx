import type { Meta, StoryObj } from "@storybook/react";
import { DomainCard } from "../domain-card";

const meta = {
  title: "Molecules/DomainCard",
  component: DomainCard,
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
} satisfies Meta<typeof DomainCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
