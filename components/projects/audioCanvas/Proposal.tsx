import Image from 'next/image';

export default function AudioCanvasIntro() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">提案</h2>
      <p>
        楽曲データに基づいて、グラフィックを作成。
        そのグラフィックをランダムに並べる。
        その中からユーザーが任意のグラフィックを選択することで、視覚的な印象のみに基づく、思いがけない音楽との出会いを提供できる。
        このプロジェクトでは、その中の楽曲データを取得してグラフィックを生成するプログラムを作成した。
        <br/>
      </p>

      <div className="relative mx-auto w-full">
          <Image
            src="/thumbnails/works/audiocanvas.png"
            alt="The Number of Love in the Beatles Album"
            width={1200} // 高解像度画像にも対応
            height={800}
            className="object-contain w-full h-auto mt-10"
          />
      </div>
    </section>
  );
}
