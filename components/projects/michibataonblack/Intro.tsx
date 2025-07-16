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
          <strong>プロジェクト概要</strong>
          <br />
          「道端オンブラック （MOB）」は、光をほとんど反射しない特別な黒色素材を背景に、道端の草花や実を撮影するプロジェクトです。
          <br />
          ふだんは見過ごされている都市の植物たちの植生や形の魅力を再発見すること 植物写真史を更新すること／プロジェクトを通して路上観察力を向上させること をテーマに活動しています。
        </p>

        <p className="text-gray-500 leading-relaxed">
          <strong>活動記録</strong>
          <br />
          ・2024.04.24 ー 初回撮影：四谷駅〜法政大学市ヶ谷田町校舎
          <br/>
          ・2024.05.15 ー 第2回撮影：東京駅〜銀座
          <br/>
          ・撮影記録を{' '}
          <Link href="https://note.com/black_lab" className="underline">
          note
          </Link>{' '}
          と{' '}
          <Link href="https://www.instagram.com/michibata_on_black/" className="underline">
          Instagram
          </Link>{' '}
          に公開
          <br/>
        </p>
        
        <div className="relative mx-auto w-full">
          <Image
            src="/works/mob/news2.jpg"
            alt="audio canvas"
            width={1200}
            height={800}
            className="object-contain w-full h-auto mt-3"
          />
        </div>

        <div className="mt-10">
          <button
            onClick={() => onChangeTab('web')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Webサイトの紹介へ →
          </button>
        </div>

      </div>
  )
}
