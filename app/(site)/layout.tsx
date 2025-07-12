import '@/app/globals.css'
import HeaderA from '@/app/components/header/HeaderA'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans bg-white text-black">

        <HeaderA />
        <main>{children}</main>

        <footer className="p-4 mt-12 border-t text-center text-sm text-gray-500">
          © 2025 Keita Imai
        </footer>
      </body>
    </html>
  );
}
