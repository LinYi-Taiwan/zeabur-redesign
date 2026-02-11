import type { Meta, StoryObj } from "@storybook/react";
import { Cpu, MemoryStick, DollarSign, Activity, Lightbulb, TriangleAlert } from "lucide-react";
import { MetricCard } from "../metric-card";

const sampleChartData = Array.from({ length: 60 }, (_, i) =>
  15 + Math.sin(i / 8) * 10 + Math.random() * 5
);

const meta = {
  title: "Molecules/MetricCard",
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
    iconColor: "#D0BCFF",
    iconBgColor: "#D0BCFF20",
    value: "12%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.12 / 1 vCPU",
    chartColor: "#D0BCFF",
    chartGradientId: "cpuGrad",
    chartData: sampleChartData,
    alert: {
      icon: Lightbulb,
      iconColor: "#D0BCFF",
      bgColor: "#D0BCFF08",
      borderColor: "#D0BCFF",
      text: "CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。",
    },
  },
};

export const MemoryCard: Story = {
  args: {
    icon: MemoryStick,
    iconColor: "#CCC2DC",
    iconBgColor: "#CCC2DC20",
    value: "126MB",
    label: "記憶體使用量",
    sublabel: "目前使用 126 / 256 MB",
    chartColor: "#CCC2DC",
    chartGradientId: "memGrad",
    chartData: sampleChartData.map((v) => v * 8),
    alert: {
      icon: TriangleAlert,
      iconColor: "#F5C344",
      bgColor: "#F5C34408",
      borderColor: "#F5C344",
      text: "記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。",
    },
  },
};

export const CostCard: Story = {
  args: {
    icon: DollarSign,
    iconColor: "#7DD87E",
    iconBgColor: "#7DD87E20",
    value: "$1.33",
    label: "預估月費",
    sublabel: "較上月 +12% ↑",
    sublabelColor: "text-tertiary",
    chartColor: "#7DD87E",
    chartGradientId: "costGrad",
    chartData: sampleChartData.map((_, i) => 0.8 + (i / 60) * 0.6),
  },
};

export const NetworkCard: Story = {
  args: {
    icon: Activity,
    iconColor: "#F5C344",
    iconBgColor: "#F5C34420",
    value: "1.2GB",
    label: "網路流量",
    sublabel: "本月累計傳輸量",
    chartColor: "#F5C344",
    chartGradientId: "netGrad",
    chartData: sampleChartData,
  },
};

export const WithoutAlert: Story = {
  args: {
    icon: Cpu,
    iconColor: "#D0BCFF",
    iconBgColor: "#D0BCFF20",
    value: "45%",
    label: "CPU 使用率",
    sublabel: "目前使用 0.45 / 1 vCPU",
    chartColor: "#D0BCFF",
    chartGradientId: "cpuGradNoAlert",
    chartData: sampleChartData,
  },
};
