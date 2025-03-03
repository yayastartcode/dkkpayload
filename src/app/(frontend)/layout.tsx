import React from 'react'
import './styles.css'
import Header from './components/Header'

export const metadata = {
  title: 'Digdaya Auto Kreasi Body Repair, Karoseri & Engine Maintenance - Home',
  description: 'Karoseri Body Repair dan Engine Maintenance.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
      </head>
      <body className="bg-gray-50">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
