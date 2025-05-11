import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WildLife Park',
  description: 'zoo management system',
  generator: 'jonistyle.com',
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
