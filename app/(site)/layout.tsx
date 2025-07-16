'use client';

import '@/app/globals.css'
import HeaderA from '@/app/components/header/HeaderA'
import Footer from '@/app/components/footer'
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTopPage = pathname === '/';

  return (
    <html lang="ja">
      <body 
        className="h-screen flex flex-col font-sans bg-white text-black">
        
        <HeaderA />
        
        <main 
          className={`flex-1 overflow-auto bg-white ${
                      isTopPage ? 'overflow-hidden' : 'overflow-auto'
          }`}
        >
          {children}
          <Analytics />
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
