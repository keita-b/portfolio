import Link from 'next/link';
import { miniWorks } from '../../../(site)/works/p5-miniworks/workData'

export default async function MiniWorksPage({
  params,
}: {
  params: Promise<{}>;
}) {
  await params;

  return (
    <div className="h-full bg-black text-white px-8 py-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 shrink-0">p5.js Mini Works</h1>

      {/* 作品一覧グリッド（6作品 × 2段 × 高さ調整） */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {miniWorks.map((work) => (
          <Link
            key={work.slug}
            href={`/works/p5-miniworks/${work.slug}`}
            className="bg-white text-black rounded-md overflow-hidden hover:scale-105 transition-transform duration-200 flex flex-col"
          >
            <div className="aspect-[4/3] bg-gray-200">
              <img
                src={`/thumbnails/p5js-miniworks/${work.slug}.png`}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 py-1 text-sm font-medium">{work.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
