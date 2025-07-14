// app/components/header/HeaderC.tsx
'use client';

import Link from 'next/link';

export default function HeaderC({ title }: { title: string }) {
  return (
    <header className="flex items-center w-full px-8 py-4 bg-black text-gray-500 border-b">

      {/* 左端：戻る */}
      <Link
        href="/works/p5-miniworks"
        className="text-sm hover:text-gray-300 whitespace-nowrap"
      >
        ◀︎
      </Link>

      {/* フレックスアイテム間の残り幅を全部取る → タイトルが右端へ */}
      <h1 className="ml-auto text-lg font-semibold whitespace-nowrap">
        {title}
      </h1>
    </header>
  );
}
