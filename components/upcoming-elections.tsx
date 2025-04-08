import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingElections() {
  const elections = [
    {
      id: 1,
      title: "Board of Directors",
      date: "May 15, 2024",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Student Council",
      date: "June 2, 2024",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Community Association",
      date: "June 10, 2024",
      status: "Upcoming",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Elections</CardTitle>
        <CardDescription>Elections scheduled in the near future.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {elections.map((election) => (
            <div key={election.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{election.title}</div>
                <div className="text-xs text-muted-foreground">{election.date}</div>
              </div>
              <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {election.status}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
