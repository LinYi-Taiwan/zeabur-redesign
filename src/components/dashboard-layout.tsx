import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar";
import { ServiceHeader } from "@/components/service-header";

export function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ServiceHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
