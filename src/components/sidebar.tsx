import {
  Globe,
  Database,
  Server,
  Cpu,
  ChevronDown,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarServices } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  "Web Service": Globe,
  PostgreSQL: Database,
  Redis: Server,
  Worker: Cpu,
};

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-[var(--border)] bg-[var(--background)] flex flex-col">
      {/* Project header */}
      <div className="p-4 border-b border-[var(--border)]">
        <button className="flex items-center gap-2 w-full text-left hover:bg-[var(--muted)] rounded-lg p-2 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
            Z
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">my-project</div>
            <div className="text-xs text-[var(--muted-foreground)]">
              Asia East (Taiwan)
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
      </div>

      {/* Services list */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="flex items-center justify-between px-2 py-1.5 mb-1">
          <span className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
            Services
          </span>
          <button className="p-1 hover:bg-[var(--muted)] rounded transition-colors">
            <Plus className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
          </button>
        </div>

        {sidebarServices.map((service) => {
          const Icon = iconMap[service.type] || Server;
          const isActive = service.id === "svc_abc123";

          return (
            <button
              key={service.id}
              className={cn(
                "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg transition-colors mb-0.5",
                isActive
                  ? "bg-[var(--muted)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-sm truncate flex-1">{service.name}</span>
              <span
                className={cn(
                  "w-2 h-2 rounded-full shrink-0",
                  service.status === "running"
                    ? "bg-[var(--success)]"
                    : "bg-[var(--muted-foreground)]"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-[var(--border)]">
        <div className="text-xs text-[var(--muted-foreground)]">
          4 services &middot; 3 running
        </div>
      </div>
    </aside>
  );
}
