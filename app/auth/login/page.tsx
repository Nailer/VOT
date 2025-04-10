"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { usePrivy, useWallets } from "@privy-io/react-auth"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()


  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // })

  const { user, authenticated, login, logout, ready } = usePrivy()

  useEffect(() => {
      if (authenticated) {
        router.push("/dashboard")
      } else{
        setIsLoading(false)
      }
    }, [authenticated, router])


  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   setIsLoading(true)

  //   try {
  //     // This is where you would integrate with your authentication service
  //     // For example: const response = await signIn(values.email, values.password)

  //     // Simulate authentication delay
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     // Show success message
  //     toast({
  //       title: "Login successful",
  //       description: "You have been logged in successfully.",
  //     })

  //     // Redirect to dashboard or home page
  //     router.push("/dashboard")
  //   } catch (error) {
  //     // Show error message
  //     toast({
  //       title: "Login failed",
  //       description: "Please check your credentials and try again.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  return isLoading ? <h1>Loading...</h1> : (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      {/* {authenticated ? (
          <span>
            {" "}
            {user?.wallet?.address?.substring(0, 6)}...
            {user?.wallet?.address?.substring(user?.wallet?.address?.length - 4)}
            {user?.email?.address.substring(0, 5)}...
            {user?.email?.address?.substring(3, 9)}
          </span>
        ) : (
          <span />
        )} */}
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <h1 className="text-2xl font-bold">VOT Election</h1>
          <p>Connect your wallet to get started</p>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@example.com"
                        type="email"
                        autoComplete="email"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        autoComplete="current-password"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <Button 
              type="submit" 
              className="w-full"
              onClick={() => login()}
              >
                Connect Wallet
              </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
