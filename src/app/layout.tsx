import { Header } from '@/components/Header'
import { ReactNode } from 'react'
import './global.css'

import { Baloo_2, Roboto } from '@next/font/google'

const roboto = Roboto({
  variable: '--font-roboto',
  display: 'swap',
  weight: '500',
})

const ballo2 = Baloo_2({
  variable: '--font-ballo2',
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${ballo2.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
