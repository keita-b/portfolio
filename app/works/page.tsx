import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">作品一覧</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/works/beatles-info" className="text-blue-600 underline">
            The Beatles Info Graphic
          </Link>
        </li>
        <li>
          <Link href="/works/audiocanvas" className="text-blue-600 underline">
            Audio Canvas
          </Link>
        </li>
        <li>
          <Link href="/works/ana" className="text-blue-600 underline">
            Branding ANA
          </Link>
        </li>
        <li>
          <Link href="/works/michibataonblack" className="text-blue-600 underline">
            道端オンブラック
          </Link>
        </li>
        <li>
          <Link href="/works/pixel-lab" className="text-blue-600 underline">
            大学院 卒業制作
          </Link>
        </li>
        <li>
          <Link href="/works/p5-miniworks" className="text-blue-600 underline">
            P5jsを用いた小作品
          </Link>
        </li>
      </ul>
    </main>
  );
}
