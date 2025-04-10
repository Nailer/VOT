"use client";
import Link from "next/link";
import { Home, PlusCircle, Trophy, Vote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePrivy, useWallets } from "@privy-io/react-auth";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { user, authenticated, logout, ready } = usePrivy();

  return (
    <Sidebar>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <div className="flex h-full items-center px-4 font-semibold">
          Election Dashboard
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex items-center gap-3 px-4 py-4 overflow-hidden">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.email?.address}
            </p>
            <p className="text-xs text-muted-foreground">
              {user?.wallet?.address.substring(0, 6)}...
              {user?.wallet?.address.substring(
                user?.wallet?.address.length - 10
              )}
            </p>
          </div>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Home" isActive>
              <Link href="/">
                <Home className="mr-2" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Create Election">
              <Link href="/create-election">
                <PlusCircle className="mr-2" />
                <span>Create Election</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Contest">
              <Link href="/contest">
                <Trophy className="mr-2" />
                <span>Contest</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Vote">
              <Link href="/vote">
                <Vote className="mr-2" />
                <span>Vote</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <button onClick={() => {
          logout()
          }} className="mt-auto mb-4 bg-[#121212] disabled:bg-[#444] p-2 text-white mx-2 rounded">Logout</button>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="text-xs text-sidebar-foreground/70">
          © {new Date().getFullYear()} Election System
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
