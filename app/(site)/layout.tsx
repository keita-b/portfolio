import '@/app/globals.css'
import HeaderA from '@/app/components/header/HeaderA'
import Footer from '@/app/components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="h-screen flex flex-col font-sans bg-white text-black">
        
        <HeaderA />
        
        <main className="flex-1 overflow-auto bg-white">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
