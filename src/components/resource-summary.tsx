import { Cpu, MemoryStick, DollarSign, Activity, Lightbulb, TriangleAlert } from "lucide-react";
import { resourceData } from "@/lib/mock-data";

/** Mini sparkline chart rendered as SVG */
export function MiniAreaChart({
  color,
  gradientId,
  data,
}: {
  color: string;
  gradientId: string;
  data: number[];
}) {
  const width = 532;
  const height = 48;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((v - min) / range) * height * 0.9 - height * 0.05,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.25} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function TimeLabels() {
  return (
    <div className="flex justify-between">
      <span className="text-label-sm font-mono text-outline">00:00</span>
      <span className="text-label-sm font-mono text-outline">06:00</span>
      <span className="text-label-sm font-mono text-outline">12:00</span>
    </div>
  );
}

export interface AlertTipProps {
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  text: string;
}

function AlertTip({ icon: Icon, iconColor, bgColor, borderColor, text }: AlertTipProps) {
  return (
    <div
      className="flex gap-sm rounded-sm px-md py-sm"
      style={{
        backgroundColor: bgColor,
        borderLeft: `2px solid ${borderColor}`,
      }}
    >
      <Icon className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: iconColor }} />
      <p className="text-label-sm leading-[1.4] text-on-surface-variant">{text}</p>
    </div>
  );
}

export interface MetricCardProps {
  icon: React.ElementType;
  iconColor: string;
  iconBgColor: string;
  value: string;
  label: string;
  sublabel: string;
  sublabelColor?: string;
  chartColor: string;
  chartGradientId: string;
  chartData: number[];
  alert?: AlertTipProps;
}

export function MetricCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  value,
  label,
  sublabel,
  sublabelColor = "text-on-surface-variant",
  chartColor,
  chartGradientId,
  chartData,
  alert,
}: MetricCardProps) {
  return (
    <div className="flex flex-col gap-md rounded-md border border-outline-variant bg-surface-container p-xl">
      {/* Top: icon + value */}
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="w-[18px] h-[18px]" style={{ color: iconColor }} />
        </div>
        <span className="text-headline-sm font-semibold font-mono text-on-surface">{value}</span>
      </div>

      {/* Label */}
      <div>
        <div className="text-body-md font-semibold text-on-surface">{label}</div>
        <div className={`text-label-sm font-mono ${sublabelColor}`}>{sublabel}</div>
      </div>

      {/* Mini chart */}
      <MiniAreaChart color={chartColor} gradientId={chartGradientId} data={chartData} />
      <TimeLabels />

      {/* Alert tip */}
      {alert && <AlertTip {...alert} />}
    </div>
  );
}

export function ResourceSummary() {
  const { current, cost } = resourceData;

  const cpuData = resourceData.timeSeries["12h"].map((d) => d.cpu);
  const memData = resourceData.timeSeries["12h"].map((d) => d.memory);
  const costData = cpuData.map((_, i) => 0.8 + (i / cpuData.length) * 0.6 + Math.sin(i * 0.7) * 0.05);
  const netData = cpuData.map(
    (_, i) =>
      0.3 +
      Math.exp(-((i - cpuData.length * 0.6) ** 2) / (2 * (cpuData.length * 0.15) ** 2)) * 0.9
  );

  const costChange = Math.round(((cost.estimated - cost.previousMonth) / cost.previousMonth) * 100);

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
        />
      </div>
    </div>
  );
}
