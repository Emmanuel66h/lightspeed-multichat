import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lightspeed Labz — Building the future, one project at a time.',
  description: 'Lightspeed Labz is an independent technology studio creating software, games, blockchain technology, and digital experiences.',
  generator: 'Lightspeed Labz',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0e18',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
