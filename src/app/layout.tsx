// src/app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MOOC Presentation',
  description: 'A presentation about MOOCs using Reveal.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div 
          className="reveal"
          style={{
            width: '100vw',
            height: '100vh',
            maxWidth: '1920px',
            maxHeight: '1080px',
            margin: '0 auto',
          }}
        >
          <div className="slides">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}