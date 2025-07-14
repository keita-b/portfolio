// app/(site)/page.tsx
'use client';                          // ★追加（ページ全体が Client Component）

import dynamic from 'next/dynamic';
import HeaderA from '@/app/components/header/HeaderA';

const Sketch = dynamic(() => import('@/components/ImageToLineSketch'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col bg-white">
      <div className="flex-1 overflow-hidden">
        <Sketch />
      </div>
    </main>
  );
}
