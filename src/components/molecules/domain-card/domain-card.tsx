import { Globe, CheckCircle2, Loader2, ExternalLink, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { domains } from "@/lib/mock-data";
import { trackEvent, EVENTS } from "@/lib/analytics";

export function DomainCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Domains</h3>
        <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-2">
        {domains.map((domain) => (
          <button
            key={domain.domain}
            onClick={() => {
              trackEvent(EVENTS.DOMAIN_MANAGE_CLICKED, {
                domain: domain.domain,
                status: domain.status,
              });
            }}
            className="flex items-center gap-3 w-full text-left p-2.5 rounded-lg hover:bg-muted transition-colors group"
          >
            {domain.status === "active" ? (
              <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
            ) : (
              <Loader2 className="w-4 h-4 text-warning shrink-0 animate-spin" />
            )}

            <div className="flex-1 min-w-0">
              <div className="text-sm truncate">{domain.domain}</div>
              <div className="text-xs text-muted-foreground">
                {domain.status === "active" ? "Active" : "Setting up..."}
                {domain.isDefault && " · Default"}
              </div>
            </div>

            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
