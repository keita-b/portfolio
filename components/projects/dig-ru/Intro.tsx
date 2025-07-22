import Image from 'next/image';

export default function DigruIntro() {
  return (
        <div className="mx-auto px-6 py-6 space-y-6">
            <p className="text-gray-500 leading-relaxed">
                <strong className='block'>制作背景</strong>
                <br />
                レコード屋での思いがけない音楽との出会いをWeb上でも再現したいと思い、音楽検索アプリ「Digる」を開発した。
                <br />
                年代やジャンルを手がかりに知らなかったアーティストやレーベルを辿っていく感覚を大切にし、デジタル空間でも“音楽を掘る楽しさ”を味わえるUI/UXを目指した。
            </p>


            <hr className="my-16 border-gray-300" />

        
            <p className="text-gray-500 leading-relaxed">
                <strong className='block'>アプリの機能</strong>
            </p>
            
            <div>
                <p className="text-gray-500 leading-relaxed mb-2">
                    ① 検索画面
                    <br />
                    ジャンル・リリース年・レーベル名・国によるフィルタリング検索が可能。
                </p>
                <div className="relative mx-auto w-full">
                    <Image
                        src="/works/dig-ru/search.png"
                        alt="検索画面"
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto border border-gray-300"
                    />
                </div>
            </div>

            <div className='mt-12'>
                <p className="text-gray-500 leading-relaxed mb-2">
                    ② 検索結果
                    <br />
                    アルバムジャケットと基本情報、保存ボタンをまとめて表示することで、気になったアルバムや楽曲を簡単に保存可能。
                    <br />
                    スワイプによって検索結果を切り替えるUIにすることで、アナログの掘り出し感を演出。
                </p>
                <div className="relative mx-auto w-full">
                    <Image
                        src="/works/dig-ru/result.gif"
                        alt="検索結果"
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto border border-gray-300"
                    />
                </div>
            </div>

            <div className='mt-12'>
                <p className="text-gray-500 leading-relaxed mb-2">
                    ③ 保存リスト
                    <br/>
                    保存したアルバムや楽曲を一覧で確認可能。
                </p>
                <div className="relative mx-auto w-full">
                    <Image
                        src="/works/dig-ru/save.png"
                        alt="保存済みページ"
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto border border-gray-300"
                    />
                </div>
            </div>
        </div>
  );
}