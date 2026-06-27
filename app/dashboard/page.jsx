import { ClientDashboardContent, DashboardShell } from "../components";

export default function DashboardPage() {
  return (
    <DashboardShell role="client" title="Client Dashboard">
      <ClientDashboardContent />
    </DashboardShell>
  );
}
