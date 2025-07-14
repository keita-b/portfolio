import '@/app/globals.css'
import HeaderA from '@/app/components/header/HeaderA'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="h-screen flex flex-col font-sans bg-white text-black">
        <HeaderA /> {/* ←高さ固定（例：h-12） */}
        <main className="flex-1 overflow-hidden">{children}</main>
        <footer className="h-12 text-center text-sm text-gray-500 flex items-center justify-center border-t">
          © 2025 Keita Imai
        </footer>
      </body>
    </html>
  );
}
