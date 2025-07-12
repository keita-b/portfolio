import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Keita Imai Portfolio</h1>

      <p className="mb-4">
        こんにちは、今井啓太です。<br />
        法政大学大学院 デザイン工学研究科 システムデザイン専攻 修士2年です。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">👤 プロフィール</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>名前：今井啓太</li>
        <li>生年月日：2002年1月8日</li>
        <li>所属：法政大学大学院 デザイン工学研究科 システムデザイン専攻 修士2年</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🎧 趣味と関心</h2>
      <p className="mb-4">
        音楽が大好きです。Spotifyでは1920〜2020年代までの10年ごとのプレイリストを作るほど聴き込んでいます。<br />
        音楽の背景を調べるのも好きで、そこから映画、漫画、本…と知的好奇心がいろんなジャンルに派生していくのが楽しいです。<br />
        音楽を中心に好奇心が循環する日々を過ごしています。
      </p>
      <p className="mb-4">
        好きな音楽は{' '}
        <a href="https://www.threads.net/@atiekiami" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Threads
        </a>{' '}
        で紹介しています。ぜひ覗いてみてください。
      </p>

      <div>
        <Link href="/works" className="text-blue-600 underline">
          作品を見る
        </Link>
      </div>
    </main>
  );
}