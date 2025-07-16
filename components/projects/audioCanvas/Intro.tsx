import Image from 'next/image';

export default function AudioCanvasIntro() {
  return (
        <div className="mx-auto px-6 py-6 space-y-6">
          <p className="text-gray-500 leading-relaxed">
            <strong>制作背景</strong>
            <br />
            学部4年次の卒業制作として、「思いがけない音楽との出会い」をテーマに取り組んだプロジェクト。
            <br />
            現在、多くの人はストリーミングサービスを用いて音楽を聴いている。
            しかし、ストリーミングサービスには、ユーザーの嗜好に基づいて楽曲をおすすめするアルゴリズムが搭載されているため、
            フィルターバブルによって、未知の楽曲と出会う機会が制限されていると考えた。
            <br />
            この課題を解決するサービスとして、Audio Cnavasを提案した。
          </p>
    
          <p className="text-gray-500 leading-relaxed">
            <strong>作品説明</strong>
            <br />
              SpotifyのAPIを利用して取得した楽曲の特徴を表す8つのパラメータをもとに、processingで楽曲の印象を視覚化したグラフィックを生成する。
              そのようにして生成したグラフィックを無作為に並べて表示することで、ユーザーは嗜好に左右されず視覚的な印象のみで楽曲を選択することができる。
              これにより、「思いがけない音楽との出会い」を提供することが可能である。
              <br />
              このプロジェクトでは、プロトタイプとして、楽曲のURLを入力するとグラフィックを生成するプログラムを制作した。
            <br/>
          </p>
    
          <div className="relative mx-auto w-full">
              <Image
                src="/thumbnails/works/audiocanvas.png"
                alt="audio canvas"
                width={1200}
                height={800}
                className="object-contain w-full h-auto mt-10"
              />
          </div>
        </div>
  );
}