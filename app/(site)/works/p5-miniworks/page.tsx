import Link from 'next/link';
import Image from 'next/image';
import { miniWorks } from '../../../(site)/works/p5-miniworks/workData'

export default async function MiniWorksPage() {
  return (
    <div className="px-8 py-6 flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-600 font-semi-bold mb-2">
          p5.js Mini Works
        </h1>
        <p className="text-sm text-gray-500">
          p5.jsで作成した小作品を集めたギャラリーです。「ずっと見ていられること」を目指しました。
        </p>
      </div>
      
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {miniWorks.map((work) => (
          <Link
            key={work.slug}
            href={`/works/p5-miniworks/${work.slug}`}
            className="bg-white text-black rounded border border-gray-500 overflow-hidden hover:scale-103 transition-transform duration-200 flex flex-col"
          >
            <div className="aspect-[16/9] bg-gray-200">
              <Image
                src={`/thumbnails/p5js-miniworks/${work.slug}.png`}
                alt={work.title}
                className="w-full h-full object-cover border-b border-gray-300"
                width={320} // ⬅️ 必須（LCP警告を避ける）
                height={180}
              />
            </div>
            <div className="px-2 py-1 text-sm font-medium truncate">
              {work.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
