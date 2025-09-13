import './globals.css'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Inter , Lexend } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-inter',
});

const lexend = Lexend({  
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

export const metadata = {
  title: 'Fasti',
  description: 'Fasti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body  className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  )
}
