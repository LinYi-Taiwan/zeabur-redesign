import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Cpu, MemoryStick, DollarSign, Activity, Lightbulb, TriangleAlert } from "lucide-react";
import { MetricCard, ResourceSummary } from "./resource-summary";

const sampleData = Array.from({ length: 60 }, (_, i) => 15 + Math.sin(i / 8) * 10);

describe("MetricCard", () => {
  describe("Snapshot Tests", () => {
    it("renders CPU card with alert correctly", () => {
      const { container } = render(
        <MetricCard
          icon={Cpu}
          iconColor="#7C3AED"
          iconBgColor="#7C3AED20"
          value="12%"
          label="CPU 使用率"
          sublabel="目前使用 0.12 / 1 vCPU"
          chartColor="#7C3AED"
          chartGradientId="cpuGrad"
          chartData={sampleData}
          alert={{
            icon: Lightbulb,
            iconColor: "#7C3AED",
            bgColor: "#7C3AED08",
            borderColor: "#7C3AED",
            text: "CPU 用量偏低",
          }}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders Memory card with warning alert correctly", () => {
      const { container } = render(
        <MetricCard
          icon={MemoryStick}
          iconColor="#3B82F6"
          iconBgColor="#3B82F620"
          value="126MB"
          label="記憶體使用量"
          sublabel="目前使用 126 / 256 MB"
          chartColor="#3B82F6"
          chartGradientId="memGrad"
          chartData={sampleData}
          alert={{
            icon: TriangleAlert,
            iconColor: "#EAB308",
            bgColor: "#EAB30808",
            borderColor: "#EAB308",
            text: "記憶體用量已達 49%",
          }}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders Cost card without alert correctly", () => {
      const { container } = render(
        <MetricCard
          icon={DollarSign}
          iconColor="#22C55E"
          iconBgColor="#22C55E20"
          value="$1.33"
          label="預估月費"
          sublabel="較上月 +12% ↑"
          sublabelColor="text-emerald-500"
          chartColor="#22C55E"
          chartGradientId="costGrad"
          chartData={sampleData}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders Network card without alert correctly", () => {
      const { container } = render(
        <MetricCard
          icon={Activity}
          iconColor="#EAB308"
          iconBgColor="#EAB30820"
          value="1.2GB"
          label="網路流量"
          sublabel="本月累計傳輸量"
          chartColor="#EAB308"
          chartGradientId="netGrad"
          chartData={sampleData}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe("ResourceSummary", () => {
  it("renders the full 2x2 grid correctly", () => {
    const { container } = render(<ResourceSummary />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
