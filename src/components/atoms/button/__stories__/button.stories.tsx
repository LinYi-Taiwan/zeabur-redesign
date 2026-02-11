import type { Meta, StoryObj } from "@storybook/react";
import { Settings, Plus, RotateCcw } from "lucide-react";
import { Button } from "../button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: <Settings className="w-4 h-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <RotateCcw className="w-3.5 h-3.5" />
        Redeploy
      </>
    ),
  },
};
