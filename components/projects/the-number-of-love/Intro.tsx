import Image from 'next/image';

export default function AudioCanvasPage() {
  return (
    <div className="mx-auto px-6 py-6 space-y-6">
      <p className="text-gray-500 leading-relaxed">
        <strong>制作背景</strong>
        <br />
        自分で設定した調査テーマをもとに、インフォグラフィックを制作する。
      </p>

      <p className="text-gray-500 leading-relaxed">
        <strong>作品説明</strong>
        <br />
        「The Beatles」の楽曲の歌詞に登場する「Love」という単語の数に注目し、
        アルバムごとにその数を調査した。
        <br />
        調査結果は、ハートの大きさと数字で可視化し、一目で比較できるデザインとした。
        <br />
        また、各アルバムジャケットをモチーフにしたデザイン要素も取り入れ、
        ファンが楽しめるグラフィックになるよう工夫した。
      </p>

      <div className="relative mx-auto w-full">
        <Image
          src="/thumbnails/works/the-number-of-love.png"
          alt="The Number of Love in the Beatles Album"
          width={1200}
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />
      </div>
    </div>
  );
}
