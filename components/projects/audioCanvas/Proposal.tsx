import Image from 'next/image';

export default function AudioCanvasIntro() {
  return (
        <div className="mx-auto px-6 py-6 space-y-6">
          <p className="text-gray-500 leading-relaxed">
            <strong>課題内容</strong>
            <br />
            自分で設定した調査テーマをもとに、インフォグラフィックを制作する。
          </p>
    
          <p className="text-gray-500 leading-relaxed">
            <strong>作品説明</strong>
            <br />
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
        </div>
  );
}
