import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { resourceData } from "@/lib/mock-data";
import { TimeRange } from "@/components/molecules/time-range-selector/time-range-selector";
import { MetricType } from "@/components/organisms/resource-summary/resource-summary";
import { X } from "lucide-react";

interface MetricDetailChartProps {
  metric: MetricType;
  timeRange: TimeRange;
  onClose?: () => void;
}

const metricConfig = {
  cpu: {
    label: "CPU 使用率",
    color: "#D0BCFF",
    gradientId: "cpuDetailGradient",
    unit: "%",
    dataKey: "cpu",
    limit: 100,
    alertThreshold: 80,
    description: "即時 CPU 使用狀況,幫助你了解運算資源的消耗情形",
  },
  memory: {
    label: "記憶體使用量",
    color: "#CCC2DC",
    gradientId: "memDetailGradient",
    unit: "MB",
    dataKey: "memory",
    limit: resourceData.current.memory.limit,
    alertThreshold: resourceData.current.memory.limit * 0.8,
    description: "監控記憶體用量,避免 OOM 導致服務中斷",
  },
  cost: {
    label: "預估費用趨勢",
    color: "#7DD87E",
    gradientId: "costDetailGradient",
    unit: "$",
    dataKey: "cost",
    limit: 5,
    alertThreshold: 4,
    description: "根據資源使用量估算的費用變化趨勢",
  },
  network: {
    label: "網路流量",
    color: "#F5C344",
    gradientId: "netDetailGradient",
    unit: "GB",
    dataKey: "network",
    limit: 2,
    alertThreshold: 1.5,
    description: "累計網路傳輸量,包含上傳與下載流量",
  },
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  config: (typeof metricConfig)[MetricType];
}

function CustomTooltip({ active, payload, label, config }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-surface-container-high border border-outline-variant rounded-md px-md py-sm shadow-xl">
      <div className="text-label-sm text-on-surface-variant mb-xs">{label}</div>
      <div className="text-body-md font-semibold font-mono text-on-surface">
        {config.unit === "$" ? config.unit : ""}
        {payload[0].value.toFixed(config.unit === "$" ? 2 : 0)}
        {config.unit !== "$" ? config.unit : ""}
      </div>
    </div>
  );
}

export function MetricDetailChart({
  metric,
  timeRange,
  onClose,
}: MetricDetailChartProps) {
  const config = metricConfig[metric];
  const rawData = resourceData.timeSeries[timeRange];

  // Generate data based on metric type
  const data = rawData.map((d, i) => {
    let value: number;
    switch (metric) {
      case "cpu":
        value = d.cpu;
        break;
      case "memory":
        value = d.memory;
        break;
      case "cost":
        value = 0.8 + (i / rawData.length) * 0.6 + Math.sin(i * 0.7) * 0.05;
        break;
      case "network":
        value =
          0.3 +
          Math.exp(
            -((i - rawData.length * 0.6) ** 2) / (2 * (rawData.length * 0.15) ** 2),
          ) *
            0.9;
        break;
      default:
        value = 0;
    }
    return {
      time: d.time,
      value,
    };
  });

  return (
    <div className="rounded-md border border-primary bg-surface-container-high p-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h3 className="text-title-md font-semibold text-on-surface">
            {config.label}
          </h3>
          <p className="text-body-sm text-on-surface-variant mt-xs">
            {config.description}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm flex items-center justify-center hover:bg-surface-container-highest transition-colors"
            aria-label="關閉詳細圖表"
          >
            <X className="w-5 h-5 text-on-surface-variant" />
          </button>
        )}
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id={config.gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={config.color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={config.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={config.color}
              opacity={0.15}
            />
            <XAxis
              dataKey="time"
              stroke={config.color}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke={config.color}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, config.limit]}
            />
            <Tooltip
              content={<CustomTooltip config={config} />}
              cursor={{
                stroke: config.color,
                strokeDasharray: "3 3",
                opacity: 0.5,
              }}
            />
            {/* Alert threshold line */}
            <ReferenceLine
              y={config.alertThreshold}
              stroke="#F5C344"
              strokeDasharray="6 4"
              strokeOpacity={0.6}
              label={{
                value: "警戒線",
                position: "right",
                fill: "#F5C344",
                fontSize: 11,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={config.color}
              strokeWidth={2.5}
              fill={`url(#${config.gradientId})`}
              animationDuration={600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
