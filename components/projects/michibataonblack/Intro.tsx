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

      {/* プロジェクトの概要 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">プロジェクトの概要</h2>
        <p className="mb-4">
          「道端オンブラック（MOB）」は、光吸収率が極めて高い黒色素材
          <em>『特級暗黒布 太黒門』</em>を背景に、都市の道端に生える草花や落下した実を
          撮影するフォトプロジェクトです。太陽光までも吸収する深い黒を背景にすることで、
          植物本来のシルエットや色彩を自然光のまま際立たせ、都市に埋もれがちな植生の魅力を
          再発見します。撮影対象を採取せずその場で撮るため、植物の生命を絶たずに観察できる
          ことも特徴です。テーマは「見過ごされている都市の植物の価値の再確認」と
          「路上観察力の向上」。 {/* ([vdl.ws.hosei.ac.jp](https://vdl.ws.hosei.ac.jp/blacklab/index.html)) */}
        </p>
      </section>

      {/* 基本的な活動内容 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">基本的な活動内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            2024.04.24 — 初回撮影：四谷駅〜法政大学市ヶ谷田町校舎 {/* ([vdl.ws.hosei.ac.jp](https://vdl.ws.hosei.ac.jp/blacklab/index.html)) */}
          </li>
          <li>
            2024.05.15 — 第2回撮影：東京駅〜銀座 {/* ([vdl.ws.hosei.ac.jp](https://vdl.ws.hosei.ac.jp/blacklab/index.html)) */}
          </li>
          <li>定期的なロケハンと撮影ワークショップの実施</li>
          <li>
            撮影記録を{' '}
            <Link href="https://note.com/black_lab" className="underline">
              note
            </Link>{' '}
            と{' '}
            <Link href="https://www.instagram.com/michibata_on_black/" className="underline">
              Instagram
            </Link>{' '}
            に公開
          </li>
        </ul>
      </section>

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
          {/* ([vdl.ws.hosei.ac.jp](https://vdl.ws.hosei.ac.jp/blacklab/index.html)) */}
        </p>
      </section>

      {/* 外部展示 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">外部展示</h2>
        <p className="mb-4">
          2025.03.08–10、表参道 <em>Tiers Gallery</em> にて開催された卒業制作展「だって」に出展。
          プロジェクト中間報告として92ページの冊子を制作し、プリント作品とともに展示しました。
          体験コーナーでは実際に黒布の上で撮影体験ができ、来場者から都市の植生への気づきが
          得られたとの声を多数いただきました。 {/* ([vdl.ws.hosei.ac.jp](https://vdl.ws.hosei.ac.jp/archives/graduation2024/), [x.com](https://x.com/keitaonishi/status/1902298261685223818?utm_source=chatgpt.com)) */}
        </p>
      </section>

      {/* Optional hero image example */}
      {false && (
        <Image
          src="/works/mob/hero.jpg"
          alt="道端オンブラックのキービジュアル"
          width={800}
          height={450}
          className="rounded-xl shadow-md mb-12"
        />
      )}

      <div className="mt-10">
        {/* 現在の内容の下などにボタン追加 */}
        <button
          onClick={() => onChangeTab('proposal')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          提案タブへ移動
        </button>
      </div>
    </main>
  )
}
