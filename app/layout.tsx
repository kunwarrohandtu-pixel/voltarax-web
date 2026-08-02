import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Voltarax Pvt Ltd | Bio-Solar Panel Innovation',
  description: 'Voltarax is revolutionizing renewable energy with bio-solar panel technology.',
  keywords: 'bio-solar, renewable energy, sustainable, solar panels',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}