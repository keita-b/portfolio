export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans bg-white text-black">
        <header className="p-4 border-b">
          <nav className="flex space-x-4">
            <a href="/" className="font-bold">Home</a>
            <a href="/works">Works</a>
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
