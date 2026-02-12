import {
  Cpu,
  MemoryStick,
  DollarSign,
  Activity,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";
import { resourceData } from "@/lib/mock-data";
import { MetricCard } from "@/components/molecules/metric-card/metric-card";
import { TimeRange } from "@/components/molecules/time-range-selector/time-range-selector";

export type MetricType = "cpu" | "memory" | "cost" | "network";

export interface ResourceSummaryProps {
  timeRange?: TimeRange;
  selectedMetric?: MetricType | null;
  onMetricSelect?: (metric: MetricType) => void;
}

export function ResourceSummary({
  timeRange = "12h",
  selectedMetric,
  onMetricSelect,
}: ResourceSummaryProps) {
  const { current, cost } = resourceData;

  const cpuData = resourceData.timeSeries[timeRange].map((d) => d.cpu);
  const memData = resourceData.timeSeries[timeRange].map((d) => d.memory);
  const costData = cpuData.map(
    (_, i) => 0.8 + (i / cpuData.length) * 0.6 + Math.sin(i * 0.7) * 0.05,
  );
  const netData = cpuData.map(
    (_, i) =>
      0.3 +
      Math.exp(
        -((i - cpuData.length * 0.6) ** 2) / (2 * (cpuData.length * 0.15) ** 2),
      ) *
        0.9,
  );

  const costChange = Math.round(
    ((cost.estimated - cost.previousMonth) / cost.previousMonth) * 100,
  );

  return (
    <div className="flex flex-col gap-md">
      {/* Row 1: CPU + Memory */}
      <div className="grid grid-cols-2 gap-md">
        <MetricCard
          icon={Cpu}
          iconColor="#D0BCFF"
          iconBgColor="#D0BCFF20"
          value={`${current.cpu.percent}%`}
          label="CPU 使用率"
          sublabel={`目前使用 ${current.cpu.used} / ${current.cpu.limit} vCPU`}
          chartColor="#D0BCFF"
          chartGradientId="cpuGrad"
          chartData={cpuData}
          onClick={() => onMetricSelect?.("cpu")}
          isSelected={selectedMetric === "cpu"}
          alert={{
            icon: Lightbulb,
            iconColor: "#D0BCFF",
            bgColor: "#D0BCFF08",
            borderColor: "#D0BCFF",
            text: "CPU 用量偏低，目前方案足夠應付流量。如需更快回應速度可考慮升級。",
          }}
        />
        <MetricCard
          icon={MemoryStick}
          iconColor="#CCC2DC"
          iconBgColor="#CCC2DC20"
          value={`${current.memory.used}MB`}
          label="記憶體使用量"
          sublabel={`目前使用 ${current.memory.used} / ${current.memory.limit} MB`}
          chartColor="#CCC2DC"
          chartGradientId="memGrad"
          chartData={memData}
          onClick={() => onMetricSelect?.("memory")}
          isSelected={selectedMetric === "memory"}
          alert={{
            icon: TriangleAlert,
            iconColor: "#F5C344",
            bgColor: "#F5C34408",
            borderColor: "#F5C344",
            text: "記憶體用量已達 49%，接近警戒線。建議升級至 512MB 以避免服務中斷。",
          }}
        />
      </div>

      {/* Row 2: Cost + Network */}
      <div className="grid grid-cols-2 gap-md">
        <MetricCard
          icon={DollarSign}
          iconColor="#7DD87E"
          iconBgColor="#7DD87E20"
          value={`$${cost.estimated.toFixed(2)}`}
          label="預估月費"
          sublabel={`較上月 +${costChange}% ↑`}
          sublabelColor="text-tertiary"
          chartColor="#7DD87E"
          chartGradientId="costGrad"
          chartData={costData}
          onClick={() => onMetricSelect?.("cost")}
          isSelected={selectedMetric === "cost"}
        />
        <MetricCard
          icon={Activity}
          iconColor="#F5C344"
          iconBgColor="#F5C34420"
          value={`${current.network.used}GB`}
          label="網路流量"
          sublabel="本月累計傳輸量"
          chartColor="#F5C344"
          chartGradientId="netGrad"
          chartData={netData}
          onClick={() => onMetricSelect?.("network")}
          isSelected={selectedMetric === "network"}
        />
      </div>
    </div>
  );
}
