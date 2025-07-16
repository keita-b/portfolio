// app/(canvas)/layout.tsx
import '@/app/globals.css'
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function CanvasRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
