import { useEffect } from "react";
import { StatusOverview } from "@/components/organisms/status-overview/status-overview";
import { DeploymentList } from "@/components/organisms/deployment-list/deployment-list";
import { DomainCard } from "@/components/molecules/domain-card/domain-card";
import { QuickActions } from "@/components/molecules/quick-actions/quick-actions";
import { ResourceChart } from "@/components/organisms/resource-chart/resource-chart";
import { trackEvent, EVENTS } from "@/lib/analytics";

export function ServiceStatusPage() {
  useEffect(() => {
    trackEvent(EVENTS.SERVICE_STATUS_VIEWED, { service_id: "svc_abc123" });
  }, []);

  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <StatusOverview />

      {/* Main content grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Deployment list — 2/3 */}
        <div className="col-span-2">
          <DeploymentList />
        </div>

        {/* Right panel — 1/3 */}
        <div className="space-y-4">
          <DomainCard />
          <QuickActions />
          <ResourceChart />
        </div>
      </div>
    </div>
  );
}
