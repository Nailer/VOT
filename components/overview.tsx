import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Your election statistics at a glance.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Active Elections</div>
            <div className="font-semibold">3</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Total Votes</div>
            <div className="font-semibold">1,248</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Participation Rate</div>
            <div className="font-semibold">68%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
