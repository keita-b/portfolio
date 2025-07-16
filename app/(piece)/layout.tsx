import '@/app/globals.css';
import Footer from '@/app/components/footer';
import { Analytics } from '@vercel/analytics/react';

export default function PieceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-screen">
      <body className="h-screen flex flex-col">
        {/* ヘッダーとフッター以外をスクロール対象に */}
        <div className="flex flex-col h-full">
          {/* コンテンツエリアのみスクロール */}
          <main className="flex-1 overflow-y-auto bg-white text-black">
            {children}
            <Analytics />
          </main>

          {/* フッターは常に下に固定表示 */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
