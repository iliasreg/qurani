import { Roboto  } from 'next/font/google'
import './globals.css'


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Qurani',
  description: 'An application for quran listening and explanations',
  icons: [
    "/assets/logo.png"
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
