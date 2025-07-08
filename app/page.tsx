import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Keita Imai Portfolio</h1>
      <p className="mb-6">こんにちは、今井啓太です。創造的な技術とデザインの融合を探求しています。</p>

      <div className="space-x-4">
        <Link href="/works" className="text-blue-600 underline">作品を見る</Link>
      </div>
    </main>
  );
}
