export const metadata = {
  metadataBase: new URL('https://v1study.com.au'),
  title: 'V1 Study',
  description:
    'Practice questions for every CASA pilot exam. PPL, CPL, ATPL and IREX, written to the Part 61 MOS with full explanations and references. 7 day free trial.',
  openGraph: {
    title: 'V1 Study',
    description:
      'Practice questions for every CASA pilot exam. PPL, CPL, ATPL and IREX, written to the Part 61 MOS with full explanations and references. 7 day free trial.',
    url: 'https://v1study.com.au',
    siteName: 'V1 Study',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html, body { margin: 0; padding: 0; width: 100%; max-width: 100%; overflow-x: hidden; }
          img, video, iframe, table { max-width: 100%; }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
