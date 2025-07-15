'use client';

import Image from 'next/image';
// import Link from 'next/link';

export default function AboutPage() {
  return (
  <main className="px-6 py-12">
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 max-w-4xl mx-auto">

        
        {/* 画像（正方形） */}
        <div className="w-[300px] h-[300px] relative shrink-0">
          <Image
            src="/imaikeita.jpg"
            alt="Keita Imai"
            fill
            className="object-cover rounded border border-gray-300"
          />
        </div>

        {/* テキスト */}
        <div className="text-gray-800 max-w-xl">

          <h2 className="text-xl text-gray-500 font-semibold mt-4 mb-2 border-b">Profile</h2>
          <ul className="mb-12 list-inside">
            <li>今井啓太</li>
            <li>法政大学大学院 デザイン工学研究科 システムデザイン専攻 修士2年</li>
          </ul>

          <h2 className="text-xl text-gray-500 font-semibold mt-6 mb-2 border-b">Hobby</h2>
          <p className="mb-4">
            ディグること。
            <br/>
            音楽、映画、漫画、本……
            <br/>
            興味を持ったことはなんでもディグります。
          </p>
          <p className="mb-4">
            好きな音楽は{' '}
            <a
              href="https://www.threads.net/@atiekiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 hover:underline"
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
