import Link from 'next/link';
import Image from 'next/image';
import { works } from './worksData'; // ⬅️ hrefベースのデータ

export default function WorksPage() {
  return (
    <div className="px-8 py-6 flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-600 font-semi-bold mb-2">
          Works
        </h1>
        <p className="text-sm text-gray-500">
          制作した作品の一覧です。デザイン・技術・表現の実験的な試みを含んでいます。
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {works.map((work) => (
          <Link
            key={work.href}
            href={work.href}
            className="bg-white text-black rounded border border-gray-500 overflow-hidden hover:scale-103 transition-transform duration-200 flex flex-col"
          >
            <div className="aspect-[16/9] bg-gray-200">
              <Image
                src={work.thumbnail}
                alt={work.title}
                className="w-full h-full object-cover border-b border-gray-300"
                width={320}
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
