// app/works/[id]/page.tsx
import Image from 'next/image';
import { workMap } from '../workData';

type Params = { id: string };

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<Params>;     // ← Promise 指定
}) {
  const { id } = await params; // ← unwrap
  const work = workMap[id];

  if (!work) {
    return (
      <main className="px-8 py-12">
        <h1 className="text-2xl font-bold text-red-600">404 Not Found</h1>
        <p>この作品は存在しません。</p>
      </main>
    );
  }

  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{work.title}</h1>
      <p className="text-sm text-gray-500 mb-8">制作期間：{work.period}</p>

      {work.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <p className="mb-4 whitespace-pre-line">{section.content}</p>
          {section.image && (
            <Image src={section.image}
              alt="説明文"
              width={400}
              height={300}
              priority
            />
          )}
        </section>
      ))}
    </main>
  );
}
