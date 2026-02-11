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
    running: {
      label: "Running",
      color: "bg-emerald-500",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
    },
    stopped: {
      label: "Stopped",
      color: "bg-zinc-500",
      bgColor: "bg-zinc-500/10",
      textColor: "text-zinc-400",
      borderColor: "border-zinc-500/20",
    },
    deploying: {
      label: "Deploying",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-500/20",
    },
  };

  const config = statusConfig[serviceData.status] || statusConfig.running;

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
            <div className="text-xs text-[var(--muted-foreground)] mb-0.5">
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
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-xs text-[var(--muted-foreground)] mb-0.5">
              Last Deployed
            </div>
            <div className="text-sm font-semibold">
              {formatRelativeTime(serviceData.lastDeployedAt)}
            </div>
          </div>
        </div>

        {/* Estimated cost */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <div className="text-xs text-[var(--muted-foreground)] mb-0.5">
              Est. Monthly
            </div>
            <div className="text-sm font-semibold">
              ${serviceData.estimatedMonthlyCost.toFixed(2)}
              <span className="text-xs text-[var(--muted-foreground)] ml-1">
                /mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
