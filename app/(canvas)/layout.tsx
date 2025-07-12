// app/(canvas)/layout.tsx
import '../globals.css';          // ★ これを追加（パスはプロジェクト構成に合わせて修正）
import { ReactNode } from 'react';

export default function CanvasRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      {/* ここでベースの色を指定しておくと全ページ共通になる */}
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
