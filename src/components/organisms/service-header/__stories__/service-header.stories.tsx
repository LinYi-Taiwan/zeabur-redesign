import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ServiceHeader } from "../service-header";

const meta = {
  title: "Organisms/ServiceHeader",
  component: ServiceHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ServiceHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ResourcesTab: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/resources"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
