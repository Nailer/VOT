'use client'
import type React from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  const { authenticated } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    if (!authenticated) {
      router.push("/auth/login")
    } else{
      setLoading(false)
    }
  }, [authenticated, router])

  return loading ? <h1>loading...</h1> : (
    <div className="min-h-screen bg-gray-50">
        
        <div className="container">{children}</div>
    </div>
  )
}
