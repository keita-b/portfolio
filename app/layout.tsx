import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans bg-white text-black">
        <header className="p-4 border-b">
          <nav className="flex space-x-4">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/works">Works</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="p-4 mt-12 border-t text-center text-sm text-gray-500">
          © 2025 Keita Imai
        </footer>
      </body>
    </html>
  );
}
