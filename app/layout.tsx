import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VOT Election',
  description: 'A simple voting app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
