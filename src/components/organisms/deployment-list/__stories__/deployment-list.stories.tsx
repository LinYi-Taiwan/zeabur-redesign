import type { Meta, StoryObj } from "@storybook/react";
import { DeploymentList } from "../deployment-list";

const meta = {
  title: "Organisms/DeploymentList",
  component: DeploymentList,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 700 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DeploymentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
