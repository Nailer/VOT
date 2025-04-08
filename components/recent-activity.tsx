import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Election Created",
      details: "Board of Directors",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Candidate Added",
      details: "John Smith to Student Council",
      time: "5 hours ago",
    },
    {
      id: 3,
      action: "Voting Closed",
      details: "Department Representatives",
      time: "1 day ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions in your election system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-2">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
              <div>
                <div className="font-medium">{activity.action}</div>
                <div className="text-sm text-muted-foreground">{activity.details}</div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
