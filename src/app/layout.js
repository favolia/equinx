import './globals.css'
import localFont from "next/font/local";
import { Abril_Fatface } from "next/font/google";

const satoshi = localFont({
  src: '../../public/assets/fonts/satoshi/Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-satoshi'
})

const abril_fatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril_fatface'
})

const soligant = localFont({
  src: '../../public/assets/fonts/soligant/Soligant.ttf',
  display: 'swap',
  variable: '--font-soligant'
})

const humane = localFont({
  src: '../../public/assets/fonts/humane/Humane-VF.ttf',
  display: 'swap',
  variable: '--font-humane'
})

export const metadata = {
  title: 'Main',
  description: 'main',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} ${soligant.variable} ${abril_fatface.variable} ${humane.variable}`}>{children}</body>
    </html>
  )
}
