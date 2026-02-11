import { Settings, Puzzle, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { projectInfo, sidebarServices } from "@/lib/mock-data";

const statusColors: Record<string, string> = {
  success: "bg-status-success",
  error: "bg-status-error",
  pending: "bg-status-pending",
};

const navItems = [
  { icon: Settings, label: "設定" },
  { icon: Puzzle, label: "整合" },
  { icon: Plus, label: "建立服務" },
];

export function Sidebar() {
  return (
    <aside className="w-[220px] shrink-0 border-r border-outline-variant bg-surface-container-lowest flex flex-col">
      {/* Header: project name + region */}
      <div className="px-4 py-4">
        <div className="text-sm font-medium text-on-surface">{projectInfo.name}</div>
        <div className="text-xs text-on-surface-variant mt-0.5">{projectInfo.region}</div>
      </div>

      <div className="h-px bg-outline-variant mx-3" />

      {/* Navigation */}
      <nav className="py-2 px-2">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-sm"
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="h-px bg-outline-variant mx-3" />

      {/* Services */}
      <div className="flex-1 overflow-y-auto py-2 px-2">
        <div className="px-3 py-1.5 mb-1">
          <span className="text-xs font-medium text-on-surface-variant">服務</span>
        </div>

        {sidebarServices.map((service) => {
          const isActive = service.id === "svc_abc123";

          return (
            <button
              key={service.id}
              className={cn(
                "flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors text-sm",
                isActive
                  ? "bg-surface-container-high text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              )}
            >
              <span
                className={cn(
                  "w-2 h-2 rounded-full shrink-0",
                  statusColors[service.status] || "bg-outline",
                  service.status === "error" && "animate-pulse shadow-[0_0_6px_2px_rgba(255,0,0,0.5)]"
                )}
              />
              <span className="truncate">{service.name}</span>
            </button>
          );
        })}
      </div>

      {/* Footer: project ID */}
      <div className="px-4 py-3 border-t border-outline-variant">
        <span className="text-xs text-on-surface-variant font-mono">
          {projectInfo.projectId}
        </span>
      </div>
    </aside>
  );
}
