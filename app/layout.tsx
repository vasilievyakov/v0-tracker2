// import type { Metadata } from 'next' // Not available in Next.js 12
// import { Geist, Geist_Mono } from 'next/font/google' // Not available in Next.js 12
// import { Analytics } from '@vercel/analytics/next' // Not compatible with Next.js 12
import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] }); // Not available in Next.js 12

// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// } // Metadata not available in Next.js 12

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        {/* <Analytics /> // Not compatible with Next.js 12 */}
      </body>
    </html>
  )
}
