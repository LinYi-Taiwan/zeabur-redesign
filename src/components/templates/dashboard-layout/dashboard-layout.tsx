import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/organisms/sidebar/sidebar";
import { ServiceHeader } from "@/components/organisms/service-header/service-header";

export function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ServiceHeader />
        <main className="flex-1 overflow-y-auto px-xl py-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
