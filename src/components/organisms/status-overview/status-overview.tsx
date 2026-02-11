import { Activity, Clock, DollarSign } from "lucide-react";
import { serviceData } from "@/lib/mock-data";

function formatRelativeTime(isoString: string) {
  const diff = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export function StatusOverview() {
  const statusConfig = {
    success: {
      label: "Running",
      color: "bg-status-success",
      bgColor: "bg-status-success/10",
      textColor: "text-status-success",
      borderColor: "border-status-success/20",
    },
    error: {
      label: "Error",
      color: "bg-status-error",
      bgColor: "bg-status-error/10",
      textColor: "text-status-error",
      borderColor: "border-status-error/20",
    },
    pending: {
      label: "Pending",
      color: "bg-status-pending",
      bgColor: "bg-status-pending/10",
      textColor: "text-status-pending",
      borderColor: "border-status-pending/20",
    },
  };

  const config = statusConfig[serviceData.status] || statusConfig.success;

  return (
    <div
      className={`rounded-xl border ${config.borderColor} ${config.bgColor} p-5`}
    >
      <div className="grid grid-cols-3 gap-6">
        {/* Status */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}
          >
            <Activity className={`w-5 h-5 ${config.textColor}`} />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">
              Status
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${config.color} animate-pulse`}
              />
              <span className={`text-sm font-semibold ${config.textColor}`}>
                {config.label}
              </span>
            </div>
          </div>
        </div>

        {/* Last deployed */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">
              Last Deployed
            </div>
            <div className="text-sm font-semibold">
              {formatRelativeTime(serviceData.lastDeployedAt)}
            </div>
          </div>
        </div>

        {/* Estimated cost */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">
              Est. Monthly
            </div>
            <div className="text-sm font-semibold">
              ${serviceData.estimatedMonthlyCost.toFixed(2)}
              <span className="text-xs text-muted-foreground ml-1">
                /mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
