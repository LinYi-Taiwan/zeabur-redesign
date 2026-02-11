// Conceptual GrowthBook integration for A/B testing
// In production, this would connect to GrowthBook SDK

type FeatureFlag = "resource_summary_bar" | "deployment_timeline_style";

interface FeatureConfig {
  defaultValue: boolean;
  description: string;
}

const FEATURES: Record<FeatureFlag, FeatureConfig> = {
  resource_summary_bar: {
    defaultValue: true,
    description: "Show resource summary bar with CPU/Memory/Cost cards at top of resource page",
  },
  deployment_timeline_style: {
    defaultValue: true,
    description: "Use timeline-style deployment history instead of plain list",
  },
};

export function useFeature(flag: FeatureFlag): { isOn: boolean } {
  // In production: const { value } = useFeatureValue(flag)
  // For demo: always return the default (enabled) state
  return { isOn: FEATURES[flag].defaultValue };
}

export function getFeatureFlags(): Record<FeatureFlag, FeatureConfig> {
  return FEATURES;
}
