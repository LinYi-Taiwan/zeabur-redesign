import { MiniAreaChart } from "@/components/atoms/mini-area-chart/mini-area-chart";
import { AlertTip, type AlertTipProps } from "@/components/molecules/alert-tip/alert-tip";
import { TimeLabels } from "@/components/atoms/time-labels/time-labels";

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
  onClick?: () => void;
  isSelected?: boolean;
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
  onClick,
  isSelected = false,
}: MetricCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-md rounded-md border p-xl transition-all ${
        onClick ? "cursor-pointer" : ""
      } ${
        isSelected
          ? "border-primary bg-surface-container-high shadow-lg scale-[1.02]"
          : "border-outline-variant bg-surface-container hover:border-outline hover:shadow-md"
      }`}
    >
      {/* Top: icon + value */}
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <Icon className="w-[18px] h-[18px]" style={{ color: iconColor }} />
        </div>
        <span className="text-headline-sm font-semibold font-mono text-on-surface">
          {value}
        </span>
      </div>

      {/* Label */}
      <div>
        <div className="text-body-md font-semibold text-on-surface">
          {label}
        </div>
        <div className={`text-label-sm font-mono ${sublabelColor}`}>
          {sublabel}
        </div>
      </div>

      {/* Mini chart */}
      <MiniAreaChart
        color={chartColor}
        gradientId={chartGradientId}
        data={chartData}
      />
      <TimeLabels />

      {/* Alert tip */}
      {alert && <AlertTip {...alert} />}
    </div>
  );
}
