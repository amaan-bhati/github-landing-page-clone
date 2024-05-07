import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub Clone By Amaan Bhati',
  description: 'GitHub landing page, meticulously crafted with Next.js, Tailwind CSS, and TypeScript. It boasts pixel-perfect visual fidelity, replicating the originals text animations, fonts, colors, and even animations. Built on top of Next.js, Tailwind CSS, and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        </body>
    </html>
  )
}
