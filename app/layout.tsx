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
      <body>{children}</body>
    </html>
  )
}
