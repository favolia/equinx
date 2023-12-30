import './globals.css'
import localFont from "next/font/local";

const satoshi = localFont({
  src: '../../public/assets/fonts/satoshi/Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-satoshi'
})

const soligant = localFont({
  src: '../../public/assets/fonts/soligant/Soligant.ttf',
  display: 'swap',
  variable: '--font-soligant'
})

export const metadata = {
  title: 'Main',
  description: 'main',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} ${soligant.variable}`}>{children}</body>
    </html>
  )
}
