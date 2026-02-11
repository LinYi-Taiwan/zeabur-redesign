import { FileText, ScrollText, Terminal } from "lucide-react";
import { trackEvent, EVENTS } from "@/lib/analytics";

const actions = [
  { icon: FileText, label: "Files", key: "files" },
  { icon: ScrollText, label: "Logs", key: "logs" },
  { icon: Terminal, label: "Shell", key: "shell" },
];

export function QuickActions() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
      <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-2">
        {actions.map(({ icon: Icon, label, key }) => (
          <button
            key={key}
            onClick={() => {
              trackEvent(EVENTS.QUICK_ACTION_CLICKED, { action_type: key });
            }}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors group"
          >
            <Icon className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />
            <span className="text-xs text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
