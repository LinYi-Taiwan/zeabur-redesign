import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ServiceStatusPage } from "@/pages/service-status";
import { ResourceUsagePage } from "@/pages/resource-usage";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<ServiceStatusPage />} />
          <Route path="resources" element={<ResourceUsagePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
