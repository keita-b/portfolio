'use client'

import Image from 'next/image'
//import Link from 'next/link'

export default function MichibataOnBlackPage() {
  return (
    <div className="mx-auto px-6 py-6 space-y-6">        
      <p className="text-gray-500 leading-relaxed">
        <strong>ゼミ展への出展</strong>
        <br />
        2025.03.08–10、表参道 <em>Tiers Gallery</em> にて開催された卒業制作展「だって」に出展。
        プロジェクト中間報告として92ページの冊子を制作し、プリント作品とともに展示しました。
        体験コーナーでは実際に黒布の上で撮影体験ができ、来場者から都市の植生への気づきが
        得られたとの声を多数いただきました。
      </p>
    
      <div className="relative mx-auto w-full">
        <Image
          src="/works/mob/DegreeShow.jpg"
          alt="Tapestry"
          width={1200}
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />
      </div>
    </div>
  )
}
