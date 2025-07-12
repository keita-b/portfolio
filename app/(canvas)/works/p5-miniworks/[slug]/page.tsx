import { notFound } from 'next/navigation';
import { miniWorks } from '../../../../(site)/works/p5-miniworks/workData';
import DynamicMiniSketch from '@/components/DynamicMiniSketch';
import HeaderC from '@/app/components/header/HeaderC';

type Params = { slug: string };

// SSG対応（省略可）
export async function generateStaticParams() {
  return miniWorks.map((w) => ({ slug: w.slug }));
}

// ★ Promise<Params> に対応した構文
export default async function MiniWorkDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const work = miniWorks.find((w) => w.slug === slug);
  if (!work) notFound();

  // app/(canvas)/works/p5-miniworks/[slug]/page.tsx
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white">
      <div className="z-10 relative">
        <HeaderC title={work.title} />
      </div>

      {/* flex-1 が “ヘッダー以外ぜんぶ” */}
      <div className="flex-1 overflow-hidden">
        <DynamicMiniSketch slug={work.slug} />
      </div>
    </div>
  );
}
