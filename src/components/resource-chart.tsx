import { useState, useCallback } from "react";
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
import { cn } from "@/lib/utils";
import { resourceData } from "@/lib/mock-data";
import { trackEvent, EVENTS } from "@/lib/analytics";

type TimeRange = "1h" | "6h" | "12h" | "24h" | "7d";
type Metric = "memory" | "cpu";

const timeRanges: { value: TimeRange; label: string }[] = [
  { value: "1h", label: "1H" },
  { value: "6h", label: "6H" },
  { value: "12h", label: "12H" },
  { value: "24h", label: "24H" },
  { value: "7d", label: "7D" },
];

const metricConfig = {
  memory: {
    label: "Memory",
    color: "#8b5cf6",
    gradientId: "memoryGradient",
    limit: resourceData.current.memory.limit,
    unit: "MB",
    alertThreshold: resourceData.current.memory.limit * 0.8,
  },
  cpu: {
    label: "CPU",
    color: "#3b82f6",
    gradientId: "cpuGradient",
    limit: 100,
    unit: "%",
    alertThreshold: 80,
  },
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  metric: Metric;
}

function CustomTooltip({ active, payload, label, metric }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const config = metricConfig[metric];

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2 shadow-xl">
      <div className="text-xs text-[var(--muted-foreground)] mb-1">{label}</div>
      <div className="text-sm font-semibold">
        {payload[0].value} {config.unit}
      </div>
    </div>
  );
}

export function ResourceChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("12h");
  const [activeMetric, setActiveMetric] = useState<Metric>("memory");

  const data = resourceData.timeSeries[timeRange];
  const config = metricConfig[activeMetric];

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range);
    trackEvent(EVENTS.RESOURCE_TIMERANGE_CHANGED, {
      from_range: timeRange,
      to_range: range,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChartHover = useCallback(
    (data: any) => {
      if (data?.activePayload?.[0]) {
        trackEvent(EVENTS.RESOURCE_CHART_HOVERED, {
          metric: activeMetric,
          value: data.activePayload[0].value,
        });
      }
    },
    [activeMetric]
  );

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        {/* Metric tabs */}
        <div className="flex items-center gap-1 bg-[var(--muted)] rounded-lg p-0.5">
          {(["memory", "cpu"] as Metric[]).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                activeMetric === metric
                  ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              {metricConfig[metric].label}
            </button>
          ))}
        </div>

        {/* Time range selector */}
        <div className="flex items-center gap-1 bg-[var(--muted)] rounded-lg p-0.5">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => handleTimeRangeChange(range.value)}
              className={cn(
                "px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors",
                timeRange === range.value
                  ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            onMouseMove={handleChartHover}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id={config.gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={config.color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={config.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="time"
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="var(--muted-foreground)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              domain={[0, config.limit]}
            />
            <Tooltip
              content={<CustomTooltip metric={activeMetric} />}
              cursor={{ stroke: "var(--muted-foreground)", strokeDasharray: "3 3" }}
            />
            {/* Alert threshold line */}
            <ReferenceLine
              y={config.alertThreshold}
              stroke="var(--warning)"
              strokeDasharray="6 4"
              strokeOpacity={0.5}
              label={{
                value: "Alert",
                position: "right",
                fill: "var(--warning)",
                fontSize: 10,
              }}
            />
            <Area
              type="monotone"
              dataKey={activeMetric}
              stroke={config.color}
              strokeWidth={2}
              fill={`url(#${config.gradientId})`}
              animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
