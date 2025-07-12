// app/components/header/HeaderC.tsx
'use client';

import Link from 'next/link';

export default function HeaderC({ title }: { title: string }) {
  return (
    <header className="flex items-center w-full px-4 py-2 bg-slate-900 text-white">

      {/* 左端：戻る */}
      <Link
        href="/works/p5-miniworks"
        className="text-sm underline hover:text-gray-300 whitespace-nowrap"
      >
        戻る
      </Link>

      {/* フレックスアイテム間の残り幅を全部取る → タイトルが右端へ */}
      <h1 className="ml-auto text-lg font-semibold whitespace-nowrap">
        {title}
      </h1>
    </header>
  );
}
