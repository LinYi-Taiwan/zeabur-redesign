import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Cpu, MemoryStick, DollarSign, Activity, Lightbulb, TriangleAlert } from "lucide-react";
import { MetricCard } from "@/components/molecules/metric-card/metric-card";
import { ResourceSummary } from "../resource-summary";

const sampleData = Array.from({ length: 60 }, (_, i) => 15 + Math.sin(i / 8) * 10);

describe("MetricCard", () => {
  describe("Snapshot Tests", () => {
    it("renders CPU card with alert correctly", () => {
      const { container } = render(
        <MetricCard
          icon={Cpu}
          iconColor="#D0BCFF"
          iconBgColor="#D0BCFF20"
          value="12%"
          label="CPU 使用率"
          sublabel="目前使用 0.12 / 1 vCPU"
          chartColor="#D0BCFF"
          chartGradientId="cpuGrad"
          chartData={sampleData}
          alert={{
            icon: Lightbulb,
            iconColor: "#D0BCFF",
            bgColor: "#D0BCFF08",
            borderColor: "#D0BCFF",
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
          iconColor="#CCC2DC"
          iconBgColor="#CCC2DC20"
          value="126MB"
          label="記憶體使用量"
          sublabel="目前使用 126 / 256 MB"
          chartColor="#CCC2DC"
          chartGradientId="memGrad"
          chartData={sampleData}
          alert={{
            icon: TriangleAlert,
            iconColor: "#F5C344",
            bgColor: "#F5C34408",
            borderColor: "#F5C344",
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
          iconColor="#7DD87E"
          iconBgColor="#7DD87E20"
          value="$1.33"
          label="預估月費"
          sublabel="較上月 +12% ↑"
          sublabelColor="text-tertiary"
          chartColor="#7DD87E"
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
          iconColor="#F5C344"
          iconBgColor="#F5C34420"
          value="1.2GB"
          label="網路流量"
          sublabel="本月累計傳輸量"
          chartColor="#F5C344"
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
