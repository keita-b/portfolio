import '@/app/globals.css'
import Footer from '@/app/components/footer'

export default function PieceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
