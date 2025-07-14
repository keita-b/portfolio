// app/(site)/page.tsx
'use client';

import dynamic from 'next/dynamic';

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
