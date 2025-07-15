// app/(canvas)/layout.tsx
import '@/app/globals.css'
import { ReactNode } from 'react';

export default function CanvasRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
