import type { Meta, StoryObj } from "@storybook/react";
import { Lightbulb, TriangleAlert, Info } from "lucide-react";
import { AlertTip } from "../alert-tip";

const meta = {
  title: "Atoms/AlertTip",
  component: AlertTip,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AlertTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Suggestion: Story = {
  args: {
    icon: Lightbulb,
    iconColor: "#D0BCFF",
    bgColor: "#D0BCFF08",
    borderColor: "#D0BCFF",
    text: "CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。",
  },
};

export const Warning: Story = {
  args: {
    icon: TriangleAlert,
    iconColor: "#F5C344",
    bgColor: "#F5C34408",
    borderColor: "#F5C344",
    text: "記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。",
  },
};

export const Info_: Story = {
  name: "Info",
  args: {
    icon: Info,
    iconColor: "#CCC2DC",
    bgColor: "#CCC2DC08",
    borderColor: "#CCC2DC",
    text: "目前使用免費方案，升級後可獲得更多資源配額與優先支援。",
  },
};
