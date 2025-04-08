import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Vote } from "lucide-react"
import Link from "next/link"
import { EmptyState } from "./empty-state"

interface Election {
  id: string
  title: string
  startDate: string
  endDate: string
  status: "Active" | "Completed" | "Draft"
  votes: number
}

interface RecentElectionsProps {
  elections: Election[]
}

export function RecentElections({ elections }: RecentElectionsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Recent Elections</h2>
        <Button asChild>
          <Link href="/create-election">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Election
          </Link>
        </Button>
      </div>

      {elections.length === 0 ? (
        <EmptyState
          title="No elections found"
          description="You haven't created any elections yet. Create your first election to get started."
          action={
            <Button asChild>
              <Link href="/create-election">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Election
              </Link>
            </Button>
          }
        />
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Votes</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {elections.map((election) => (
                <TableRow key={election.id}>
                  <TableCell className="font-medium">{election.title}</TableCell>
                  <TableCell>{election.startDate}</TableCell>
                  <TableCell>{election.endDate}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        election.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : election.status === "Completed"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {election.status}
                    </span>
                  </TableCell>
                  <TableCell>{election.votes}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/vote/${election.id}`}>
                        <Vote className="mr-2 h-4 w-4" />
                        Vote
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
