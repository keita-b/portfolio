// app/works/p5-miniworks/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { miniWorks } from '../workData';
import DynamicMiniSketch from '@/components/DynamicMiniSketch';

type Props = { params: { slug: string } };

/** ビルド時に静的生成したい場合 (任意) */
export function generateStaticParams() {
  return miniWorks.map((w) => ({ slug: w.slug }));
}

export default function MiniWorkDetailPage({ params }: Props) {
  const work = miniWorks.find((w) => w.slug === params.slug);
  if (!work) notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{work.title}</h1>
      {work.description && <p className="mb-4">{work.description}</p>}

      {/* Sketch を読み込み */}
      <DynamicMiniSketch slug={work.slug} canvasSize={760} />

      {/* 一覧へ戻るリンク (任意) */}
      <p className="mt-6">
        <Link href="/works/p5-miniworks" className="underline">
          作品一覧へ戻る
        </Link>
      </p>
    </main>
  );
}
