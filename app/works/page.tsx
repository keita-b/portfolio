import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">作品一覧</h1>

      <ul className="space-y-4">
        <li><Link href="/works/spotify-app" className="text-blue-600 underline">Spotifyを活用した楽曲発見アプリ</Link></li>
        <li><Link href="/works/pixel-lab" className="text-blue-600 underline">ピクセル画像加工アプリ（仮）</Link></li>
        <li><Link href="/works/michibata" className="text-blue-600 underline">道端オンブラック</Link></li>
        <li><Link href="/works/ana-collab" className="text-blue-600 underline">ANAとのコラボ授業</Link></li>
      </ul>
    </main>
  );
}
