import { resourceData } from "@/lib/mock-data";

export function CostEstimator() {
  const { cost } = resourceData;

  return (
    <div className="flex flex-col gap-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-title-md font-semibold text-on-surface">費用明細</h3>
        <button className="text-label-md font-medium text-primary hover:underline">
          查看完整帳單 →
        </button>
      </div>

      {/* Table */}
      <div className="rounded-md border border-outline-variant bg-surface-container overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-4 bg-surface-container-high px-lg py-md">
          <span className="text-label-sm font-semibold text-on-surface-variant">資源項目</span>
          <span className="text-label-sm font-semibold text-on-surface-variant text-right">用量</span>
          <span className="text-label-sm font-semibold text-on-surface-variant text-right">單價</span>
          <span className="text-label-sm font-semibold text-on-surface-variant text-right">小計</span>
        </div>

        {/* Table rows */}
        {cost.breakdown.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-lg py-md border-t border-outline-variant"
          >
            <span className="text-body-sm text-on-surface">{row.item}</span>
            <span className="text-body-sm font-mono text-on-surface-variant text-right">
              {row.usage}
            </span>
            <span
              className={`text-body-sm text-right ${
                row.isFree ? "text-tertiary font-medium" : "text-on-surface-variant font-mono"
              }`}
            >
              {row.unitPrice}
            </span>
            <span className="text-body-sm font-mono font-semibold text-on-surface text-right">
              ${row.total.toFixed(2)}
            </span>
          </div>
        ))}

        {/* Total row */}
        <div className="grid grid-cols-4 bg-surface-container-high px-lg py-md">
          <span className="text-body-md font-semibold text-on-surface">預估月費合計</span>
          <span />
          <span />
          <span className="text-title-md font-bold font-mono text-primary text-right">
            ${cost.estimated.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
