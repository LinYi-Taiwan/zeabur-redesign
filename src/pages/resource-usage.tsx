import { useEffect } from "react";
import { ResourceSummary } from "@/components/organisms/resource-summary/resource-summary";
import { CostEstimator } from "@/components/organisms/cost-estimator/cost-estimator";
import { UpgradeBanner } from "@/components/molecules/upgrade-banner/upgrade-banner";
import { trackEvent, EVENTS } from "@/lib/analytics";

export function ResourceUsagePage() {
  useEffect(() => {
    trackEvent(EVENTS.RESOURCE_TAB_VIEWED, { service_id: "svc_abc123" });
  }, []);

  return (
    <div className="flex flex-col gap-xl">
      {/* Page Header */}
      <div className="flex flex-col gap-xs">
        <h2 className="text-title-lg font-semibold text-on-surface">資源用量總覽</h2>
        <p className="text-body-md text-on-surface-variant">
          即時監控服務的 CPU、記憶體與費用，了解每項資源的使用狀況
        </p>
      </div>

      {/* Metric Cards (2x2 grid) */}
      <ResourceSummary />

      {/* Cost Breakdown Table */}
      <CostEstimator />

      {/* Upgrade Banner */}
      <UpgradeBanner />
    </div>
  );
}
