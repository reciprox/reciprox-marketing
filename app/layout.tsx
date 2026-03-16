import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReciProX — Relationships that refer.',
  description: 'The AI-powered referral relationship platform for professionals who grow their business through trusted introductions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}