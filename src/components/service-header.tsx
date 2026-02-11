import { useLocation, Link } from "react-router-dom";
import { Globe, Settings, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceData } from "@/lib/mock-data";

const tabs = [
  { name: "服務狀態", href: "/dashboard" },
  { name: "資源用量", href: "/dashboard/resources" },
];

export function ServiceHeader() {
  const { pathname } = useLocation();

  return (
    <header className="border-b border-outline-variant bg-surface">
      <div className="flex items-center justify-between px-2xl pt-xl pb-0">
        {/* Service info */}
        <div className="flex items-center gap-md">
          <div className="w-10 h-10 rounded-sm bg-primary-container flex items-center justify-center">
            <Globe className="w-5 h-5 text-on-primary-container" />
          </div>
          <div>
            <div className="flex items-center gap-md">
              <h1 className="text-title-lg font-semibold text-on-surface">{serviceData.name}</h1>
              <span className="text-label-sm px-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                {serviceData.type}
              </span>
            </div>
            <div className="text-body-sm text-on-surface-variant">
              {serviceData.region}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-sm">
          <button className="p-sm hover:bg-surface-container-high rounded-sm transition-colors text-on-surface-variant hover:text-on-surface">
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="p-sm hover:bg-surface-container-high rounded-sm transition-colors text-on-surface-variant hover:text-on-surface">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 px-2xl mt-lg">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={cn(
                "px-lg py-sm text-label-lg font-medium border-b-2 transition-colors",
                isActive
                  ? "border-primary text-on-surface"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              )}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
