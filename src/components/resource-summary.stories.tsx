import type { Meta, StoryObj } from "@storybook/react";
import { Cpu, MemoryStick, DollarSign, Activity, Lightbulb, TriangleAlert } from "lucide-react";
import { MetricCard, ResourceSummary } from "./resource-summary";

const sampleChartData = Array.from({ length: 60 }, (_, i) =>
  15 + Math.sin(i / 8) * 10 + Math.random() * 5
);

const meta = {
  title: "Components/MetricCard",
  component: MetricCard,
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
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CPUCard: Story = {
  args: {
    icon: Cpu,
    iconColor: "#7C3AED",
    iconBgColor: "#7C3AED20",
    value: "12%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.12 / 1 vCPU",
    chartColor: "#7C3AED",
    chartGradientId: "cpuGrad",
    chartData: sampleChartData,
    alert: {
      icon: Lightbulb,
      iconColor: "#7C3AED",
      bgColor: "#7C3AED08",
      borderColor: "#7C3AED",
      text: "CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。",
    },
  },
};

export const MemoryCard: Story = {
  args: {
    icon: MemoryStick,
    iconColor: "#3B82F6",
    iconBgColor: "#3B82F620",
    value: "126MB",
    label: "記憶體使用量",
    sublabel: "目前使用 126 / 256 MB",
    chartColor: "#3B82F6",
    chartGradientId: "memGrad",
    chartData: sampleChartData.map((v) => v * 8),
    alert: {
      icon: TriangleAlert,
      iconColor: "#EAB308",
      bgColor: "#EAB30808",
      borderColor: "#EAB308",
      text: "記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。",
    },
  },
};

export const CostCard: Story = {
  args: {
    icon: DollarSign,
    iconColor: "#22C55E",
    iconBgColor: "#22C55E20",
    value: "$1.33",
    label: "預估月費",
    sublabel: "較上月 +12% ↑",
    sublabelColor: "text-emerald-500",
    chartColor: "#22C55E",
    chartGradientId: "costGrad",
    chartData: sampleChartData.map((_, i) => 0.8 + (i / 60) * 0.6),
  },
};

export const NetworkCard: Story = {
  args: {
    icon: Activity,
    iconColor: "#EAB308",
    iconBgColor: "#EAB30820",
    value: "1.2GB",
    label: "網路流量",
    sublabel: "本月累計傳輸量",
    chartColor: "#EAB308",
    chartGradientId: "netGrad",
    chartData: sampleChartData,
  },
};

export const WithoutAlert: Story = {
  args: {
    icon: Cpu,
    iconColor: "#7C3AED",
    iconBgColor: "#7C3AED20",
    value: "45%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.45 / 1 vCPU",
    chartColor: "#7C3AED",
    chartGradientId: "cpuGradNoAlert",
    chartData: sampleChartData,
  },
};

// Full page composition
const fullPageMeta = {
  title: "Pages/ResourceSummary",
  component: ResourceSummary,
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof ResourceSummary>;

export const FullGrid: StoryObj<typeof ResourceSummary> = {
  render: () => <ResourceSummary />,
};
FullGrid.storyName = "2x2 Metric Grid";
