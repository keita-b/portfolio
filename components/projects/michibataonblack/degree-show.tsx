'use client'

import Image from 'next/image'
//import Link from 'next/link'

export default function MichibataOnBlackPage() {
  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">道端オンブラック</h1>
      <p className="text-sm text-gray-500 mb-8">2024 – Present</p>

      {/* 外部展示 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">外部展示</h2>
        <p className="mb-4">
          2025.03.08–10、表参道 <em>Tiers Gallery</em> にて開催された卒業制作展「だって」に出展。
          プロジェクト中間報告として92ページの冊子を制作し、プリント作品とともに展示しました。
          体験コーナーでは実際に黒布の上で撮影体験ができ、来場者から都市の植生への気づきが
          得られたとの声を多数いただきました。
        </p>
      </section>


      <div className="relative mx-auto w-full">
        <Image
          src="/works/mob/tapestry.png"
          alt="Tapestry"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />
      </div>

    </main>
  )
}
