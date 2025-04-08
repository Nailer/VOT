import type React from "react"
import { AppSidebar } from "./app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { UserNav } from "./user-nav"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8">
          <SidebarTrigger className="md:hidden" />
          <div className="ml-auto flex items-center gap-4">
            <UserNav />
          </div>
        </header>
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
