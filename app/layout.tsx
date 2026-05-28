export const metadata = {
  title: 'V1 Study',
  description: 'Australian Pilot Exam Prep',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html, body { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
