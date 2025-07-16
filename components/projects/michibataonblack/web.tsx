'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  onChangeTab: (id: string) => void;
};

export default function MichibataOnBlackPage({ onChangeTab }: Props) {
  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">道端オンブラック</h1>
      <p className="text-sm text-gray-500 mb-8">2024 – Present</p>

      {/* Webサイト制作 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Webサイト制作</h2>
        <p className="mb-4">
          プロジェクトの世界観を伝えるプラットフォームとして
          <Link href="https://vdl.ws.hosei.ac.jp/blacklab/" className="underline ml-1">
            Black Lab公式サイト
          </Link>
          を構築（Next.js + Tailwind CSS）。情報設計からデザイン、実装まで担当し、
          2024.07.20 に公開しました。サイトではプロジェクト概要、メンバー紹介、
          最新ニュース、外部記事へのリンクをまとめて発信しています。
        </p>
      </section>
      

      <div className="relative mx-auto w-full">
        <Image
          src="/works/mob/web.png"
          alt="Web site"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />
      </div>


      <div className="mt-10">
        {/* 現在の内容の下などにボタン追加 */}
        <button
          onClick={() => onChangeTab('proposal')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          ゼミ展タブへ移動
        </button>
      </div>
    </main>
  )
}
