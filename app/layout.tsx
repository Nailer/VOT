import type { Metadata } from 'next'
import './globals.css'
import Providers from './auth/login/Provider'

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
      <body>
        <Providers>

          {children}
        </Providers>
      </body>
    </html>
  )
}



