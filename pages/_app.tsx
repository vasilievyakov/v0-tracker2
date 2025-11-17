import '../app/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <head>
        <title>v0 App</title>
        <meta name="description" content="Created with v0" />
        <meta name="generator" content="v0.app" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <Component {...pageProps} />
      </body>
    </html>
  )
}
