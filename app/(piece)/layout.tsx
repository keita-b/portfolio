// layout.tsx
'use client';

import '@/app/globals.css';
import Footer from '@/app/components/footer';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useRef } from 'react';

export default function PieceLayout({ children }: { children: React.ReactNode }) {
  const scrollContainerRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    });

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="ja" className="h-screen">
      <body className="h-screen flex flex-col">
        <div className="flex flex-col h-full">
          {/* 👇 ここがスクロール対象 */}
          <main
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto bg-white text-black"
          >
            {children}
            <Analytics />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}