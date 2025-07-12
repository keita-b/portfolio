// app/works/p5-miniworks/page.tsx
import Link from 'next/link';
import { miniWorks } from './workData';

export const metadata = { title: 'p5 Mini Works' }; // SEO 用 (任意)

export default function MiniWorksIndexPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">p5 Mini Works</h1>

      <ul className="space-y-3">
        {miniWorks.map((work) => (
          <li key={work.slug} className="border-b pb-2">
            <Link
              href={`/works/p5-miniworks/${work.slug}`}
              className="text-blue-600 hover:underline"
            >
              {work.title}
            </Link>
            {work.description && (
              <p className="text-sm text-gray-500">{work.description}</p>
            )}
          </li>
        ))}
      </ul>
    
      <p className="mt-6">
        <Link href="/works/p5-miniworks" className="underline">
          作品一覧へ戻る
        </Link>
      </p>

    </main>
  );
}
