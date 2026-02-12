import { useEffect, useState } from "react";
import {
  ResourceSummary,
  MetricType,
} from "@/components/organisms/resource-summary/resource-summary";
import { CostEstimator } from "@/components/organisms/cost-estimator/cost-estimator";
import { UpgradeBanner } from "@/components/molecules/upgrade-banner/upgrade-banner";
import { MetricDetailChart } from "@/components/organisms/metric-detail-chart/metric-detail-chart";
import { trackEvent, EVENTS } from "@/lib/analytics";
import {
  TimeRangeSelector,
  TimeRange,
} from "@/components/molecules/time-range-selector/time-range-selector";

export function ResourceUsagePage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("12h");
  const [selectedMetric, setSelectedMetric] = useState<MetricType | null>(null);

  useEffect(() => {
    trackEvent(EVENTS.RESOURCE_TAB_VIEWED, { service_id: "svc_abc123" });
  }, []);

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range);
    trackEvent(EVENTS.RESOURCE_TIMERANGE_CHANGED, {
      from_range: timeRange,
      to_range: range,
    });
  };

  const handleMetricSelect = (metric: MetricType) => {
    setSelectedMetric(metric === selectedMetric ? null : metric);
    trackEvent(EVENTS.RESOURCE_METRIC_SELECTED, {
      metric,
      selected: metric !== selectedMetric,
    });
  };

  const handleCloseDetail = () => {
    setSelectedMetric(null);
  };

  return (
    <div className="flex flex-col gap-xl">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-xs">
          <h2 className="text-title-lg font-semibold text-on-surface">
            資源用量總覽
          </h2>
          <p className="text-body-md text-on-surface-variant">
            即時監控服務的 CPU、記憶體與費用，了解每項資源的使用狀況
          </p>
        </div>
        <TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
      </div>

      {/* Metric Cards (2x2 grid) */}
      <ResourceSummary
        timeRange={timeRange}
        selectedMetric={selectedMetric}
        onMetricSelect={handleMetricSelect}
      />

      {/* Detail Chart (shown when a metric is selected) */}
      {selectedMetric && (
        <MetricDetailChart
          metric={selectedMetric}
          timeRange={timeRange}
          onClose={handleCloseDetail}
        />
      )}

      {/* Cost Breakdown Table */}
      <CostEstimator />

      {/* Upgrade Banner */}
      <UpgradeBanner />
    </div>
  );
}
