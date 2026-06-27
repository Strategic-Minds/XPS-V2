import { DashboardShell, OpsDashboardContent } from "../components";
import { dashboardMetrics } from "@/lib/data";

export default function AdminPage() {
  return (
    <DashboardShell role="admin" title="Admin Dashboard">
      <OpsDashboardContent metrics={dashboardMetrics.admin} title="Proposal Review Queue" />
    </DashboardShell>
  );
}
