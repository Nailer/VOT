import { DashboardShell } from "../../components/dashboard-shell"
import { DashboardHeader } from "../../components/dashboard-header"
import { Overview } from "../../components/overview"
import { RecentActivity } from "../../components/recent-activity"
import { UpcomingElections } from "../../components/upcoming-elections"
import { RecentElections } from "../../components/recent-elections"

export default function DashboardPage() {
  // This would typically come from a database or API
  // const recentElections = []

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Welcome to your election management dashboard." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Overview />
        <UpcomingElections />
        <RecentActivity />
      </div>
      <div className="mt-8">
        <RecentElections elections={[]} />
      </div>
    </DashboardShell>
  )
}