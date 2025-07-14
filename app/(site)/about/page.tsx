'use client';

import Image from 'next/image';
// import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="px-6 py-12 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        {/* 画像（正方形） */}
        <div className="w-100 h-100 relative shrink-0">
          <Image
            src="/imaikeita.JPG"
            alt="Keita Imai"
            fill
            className="object-cover rounded-lg border border-gray-300"
          />
        </div>

        {/* テキスト */}
        <div className="text-gray-800 max-w-xl">

          <h2 className="text-xl font-semibold mt-6 mb-2">プロフィール</h2>
          <ul className="mb-6 list-inside">
            <li>名前：今井啓太</li>
            <li>所属：法政大学大学院 デザイン工学研究科 システムデザイン専攻 修士2年</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">趣味</h2>
          <p className="mb-4">
            ディグること。
            <br/>
            音楽、映画、漫画、本……　興味を持ったことはなんでもディグります。
          </p>
          <p className="mb-6">
            好きな音楽を{' '}
            <a
              href="https://www.threads.net/@atiekiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Threads
            </a>{' '}
            で紹介しています。ぜひ覗いてみてください。
          </p>
          
        </div>
      </div>
    </main>
  );
}
