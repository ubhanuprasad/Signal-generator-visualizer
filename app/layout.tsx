import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Signal Generator & Visualizer - ECE Academic Project',
  description: 'Interactive web application for generating and visualizing fundamental signals used in Signals & Systems and Digital Signal Processing (DSP) coursework.',
  keywords: ['signal processing', 'ECE', 'signals and systems', 'DSP', 'sine wave', 'cosine wave', 'square wave'],
  authors: [{ name: 'ECE Student' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}