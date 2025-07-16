'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  onChangeTab: (id: string) => void;
};

export default function MichibataOnBlackPage({ onChangeTab }: Props) {
  return (
      <div className="mx-auto px-6 py-6 space-y-6">
        
        <p className="text-gray-500 leading-relaxed">
          <strong>Webサイト制作</strong>
          <br />
          プロジェクトの世界観を伝えるプラットフォームとして
          <Link href="https://vdl.ws.hosei.ac.jp/blacklab/" className="underline ml-1">
            Black Lab公式サイト
          </Link>
          を構築。
          <br />
          主に実装を担当し、2024.07.20 に公開しました。サイトではプロジェクト概要、メンバー紹介、最新ニュース、外部記事へのリンクをまとめて発信しています。
        </p>
    
        <div className="relative mx-auto w-full">
          <Image
            src="/works/mob/web.png"
            alt="Web site"
            width={1200}
            height={800}
            className="object-contain w-full h-auto border border-gray-300"
          />
        </div>

        <div className="mt-10">
          <button
            onClick={() => onChangeTab('degree-show')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            ゼミ展紹介へ移動 →
          </button>
        </div>

     </div>
  )
}