import { DashboardShell, OpsDashboardContent } from "../components";
import { dashboardMetrics } from "@/lib/data";

export default function OwnerPage() {
  return (
    <DashboardShell role="owner" title="Owner Dashboard">
      <OpsDashboardContent metrics={dashboardMetrics.owner} title="Revenue Over Time" />
    </DashboardShell>
  );
}
