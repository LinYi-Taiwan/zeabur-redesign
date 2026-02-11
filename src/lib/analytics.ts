type EventParams = Record<string, string | number | boolean>;

const IS_DEV = process.env.NODE_ENV === "development";

export function trackEvent(eventName: string, params?: EventParams) {
  if (IS_DEV) {
    console.log(`[Analytics] ${eventName}`, params || {});
    return;
  }

  // Production: send to GA4
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
  }
}

// Event constants
export const EVENTS = {
  // Service Status Tab
  SERVICE_STATUS_VIEWED: "service_status_viewed",
  DEPLOYMENT_REDEPLOY_CLICKED: "deployment_redeploy_clicked",
  DEPLOYMENT_ACTION_CLICKED: "deployment_action_clicked",
  DEPLOYMENT_HISTORY_EXPANDED: "deployment_history_expanded",
  DOMAIN_MANAGE_CLICKED: "domain_manage_clicked",
  QUICK_ACTION_CLICKED: "quick_action_clicked",

  // Resource Usage Tab
  RESOURCE_TAB_VIEWED: "resource_tab_viewed",
  RESOURCE_TIMERANGE_CHANGED: "resource_timerange_changed",
  RESOURCE_CHART_HOVERED: "resource_chart_hovered",
  COST_ESTIMATE_VIEWED: "cost_estimate_viewed",
  COST_DETAIL_EXPANDED: "cost_detail_expanded",
} as const;
