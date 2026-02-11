import { Rocket, Zap } from "lucide-react";

export function UpgradeBanner() {
  return (
    <div
      className="flex items-center justify-between rounded-md p-xl px-xl"
      style={{
        background: "linear-gradient(180deg, #D0BCFF20 0%, #D0BCFF08 100%)",
        border: "1px solid #D0BCFF40",
      }}
    >
      {/* Left: icon + text */}
      <div className="flex items-center gap-lg">
        <div className="w-10 h-10 rounded-sm bg-primary-container flex items-center justify-center shrink-0">
          <Rocket className="w-5 h-5 text-on-primary-container" />
        </div>
        <div className="flex flex-col gap-xs">
          <span className="text-body-md font-semibold text-on-surface">
            升級方案，解鎖更多資源
          </span>
          <p className="text-body-sm leading-[1.4] text-on-surface-variant max-w-[420px]">
            目前記憶體用量接近上限，升級 Developer 方案可獲得 512MB 記憶體與更多 CPU 配額
          </p>
        </div>
      </div>

      {/* Right: CTA button */}
      <button className="flex items-center gap-sm rounded-sm bg-primary px-xl py-sm text-label-lg font-semibold text-on-primary hover:bg-primary/90 transition-colors shrink-0">
        <Zap className="w-3.5 h-3.5" />
        升級方案
      </button>
    </div>
  );
}
