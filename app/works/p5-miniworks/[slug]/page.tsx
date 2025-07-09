// app/works/p5-miniworks/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { miniWorks } from '../workData';
import DynamicMiniSketch from '@/components/DynamicMiniSketch';

type Params = { slug: string };

/** SSG / ISR 用 – ここは同期のままで問題ありません */
export async function generateStaticParams() {
  return miniWorks.map((w) => ({ slug: w.slug }));
}

/* ---- ページ本体 ---- */
export default async function MiniWorkDetailPage({
  params,
}: {
  /** ★ Promise<Params> と書くのがポイント */
  params: Promise<Params>;
}) {
  /* Promise を解決して slug を取り出す */
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
