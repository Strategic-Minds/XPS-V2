import { DashboardShell, OpsDashboardContent } from "../components";
import { dashboardMetrics } from "@/lib/data";

export default function ProjectManagerPage() {
  return (
    <DashboardShell role="project manager" title="Project Manager Dashboard">
      <OpsDashboardContent metrics={dashboardMetrics.pm} title="Active Project Pipeline" />
    </DashboardShell>
  );
}
