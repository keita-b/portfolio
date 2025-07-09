// app/works/p5-miniworks/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { miniWorks } from '../workData';
import DynamicMiniSketch from '@/components/DynamicMiniSketch';

type Params = { slug: string };
type Props = { params: Params | Promise<Params> };

/** ビルド時に静的生成（ISR も可） */
export async function generateStaticParams() {
  return miniWorks.map((w) => ({ slug: w.slug }));
}

export default async function MiniWorkDetailPage({ params }: Props) {
  // params が Promise かもしれないので await で解決
  const { slug } = await params;

  const work = miniWorks.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{work.title}</h1>
      {work.description && <p className="mb-4">{work.description}</p>}

      {/* Sketch を読み込み */}
      <DynamicMiniSketch slug={work.slug} canvasSize={760} />

      {/* 一覧へ戻るリンク */}
      <p className="mt-6">
        <Link href="/works/p5-miniworks" className="underline">
          作品一覧へ戻る
        </Link>
      </p>
    </main>
  );
}
