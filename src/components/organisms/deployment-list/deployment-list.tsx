import { useState } from "react";
import {
  RotateCcw,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  GitCommit,
  CheckCircle2,
  XCircle,
  Loader2,
  Pause,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { deployments } from "@/lib/mock-data";
import { trackEvent, EVENTS } from "@/lib/analytics";

function formatRelativeTime(isoString: string) {
  const diff = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const statusIcons = {
  live: CheckCircle2,
  succeeded: CheckCircle2,
  failed: XCircle,
  building: Loader2,
};

const statusColors = {
  live: "text-tertiary",
  succeeded: "text-on-surface-variant",
  failed: "text-error",
  building: "text-warning",
};

export function DeploymentList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRedeploy = () => {
    trackEvent(EVENTS.DEPLOYMENT_REDEPLOY_CLICKED, {
      service_id: "svc_abc123",
      source: "header",
    });
  };

  const handleExpand = (deploymentId: string) => {
    const newId = expandedId === deploymentId ? null : deploymentId;
    setExpandedId(newId);
    if (newId) {
      trackEvent(EVENTS.DEPLOYMENT_HISTORY_EXPANDED, {
        deployment_id: deploymentId,
      });
    }
  };

  return (
    <div>
      {/* Header with actions */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground">
          Deployments
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRedeploy}
            className="flex items-center gap-1.5 px-lg h-8 bg-primary hover:bg-primary/90 text-on-primary rounded-full text-label-md font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Redeploy
          </button>

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 top-full mt-1 z-20 w-48 bg-card border border-border rounded-lg shadow-xl py-1">
                  <button
                    onClick={() => {
                      trackEvent(EVENTS.DEPLOYMENT_ACTION_CLICKED, {
                        action: "restart",
                      });
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restart
                  </button>
                  <button
                    onClick={() => {
                      trackEvent(EVENTS.DEPLOYMENT_ACTION_CLICKED, {
                        action: "suspend",
                      });
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    Suspend
                  </button>
                  <button
                    onClick={() => {
                      trackEvent(EVENTS.DEPLOYMENT_ACTION_CLICKED, {
                        action: "reupload",
                      });
                      setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Re-upload
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-1">
          {deployments.map((deploy, index) => {
            const StatusIcon = statusIcons[deploy.status] || CheckCircle2;
            const statusColor = statusColors[deploy.status] || "text-on-surface-variant";
            const isExpanded = expandedId === deploy.id;
            const isFirst = index === 0;

            return (
              <div key={deploy.id} className="relative">
                <button
                  onClick={() => handleExpand(deploy.id)}
                  className={cn(
                    "w-full text-left pl-10 pr-4 py-3 rounded-lg transition-colors",
                    isExpanded
                      ? "bg-muted"
                      : "hover:bg-muted/50"
                  )}
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-2.5 top-4 w-[11px] h-[11px] rounded-full border-2 bg-background z-10",
                      deploy.status === "live"
                        ? "border-tertiary"
                        : deploy.status === "failed"
                          ? "border-error"
                          : "border-outline"
                    )}
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <StatusIcon
                          className={cn("w-3.5 h-3.5 shrink-0", statusColor)}
                        />
                        <span className="text-sm text-foreground truncate">
                          {deploy.commitMessage}
                        </span>
                        {deploy.status === "live" && (
                          <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-tertiary/20 text-tertiary uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <GitCommit className="w-3 h-3" />
                          {deploy.commitHash}
                        </span>
                        <span>{deploy.buildDuration}s build</span>
                        <span>{formatRelativeTime(deploy.createdAt)}</span>
                      </div>
                    </div>

                    <div className="shrink-0 ml-2 mt-0.5">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="pl-10 pr-4 pb-3">
                    <div className="bg-background rounded-lg border border-border p-3 text-xs font-mono text-muted-foreground">
                      <div className="mb-2 text-foreground font-sans text-xs font-medium">
                        Build Log
                      </div>
                      <div className="space-y-1">
                        <div>
                          <span className="text-outline">[00:01]</span>{" "}
                          Cloning repository...
                        </div>
                        <div>
                          <span className="text-outline">[00:03]</span>{" "}
                          Installing dependencies...
                        </div>
                        <div>
                          <span className="text-outline">[00:18]</span>{" "}
                          Building project...
                        </div>
                        <div>
                          <span className="text-outline">[00:{deploy.buildDuration.toString().padStart(2, "0")}]</span>{" "}
                          {deploy.status === "failed" ? (
                            <span className="text-error">
                              Build failed: Exit code 1
                            </span>
                          ) : (
                            <span className="text-tertiary">
                              Deploy successful
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
