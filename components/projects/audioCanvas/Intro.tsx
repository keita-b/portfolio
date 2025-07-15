type Props = {
  onChangeTab: (id: string) => void;
};

export default function AudioCanvasIntro({ onChangeTab }: Props) {
  return (
    <section>
      <p className="text-lg text-gray-600">
        楽曲データを視覚化し、ジャンルや雰囲気を“見る”ことで新たな音楽との出会いを促す、視覚探索型音楽アプリ。
      </p>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-2">制作背景とコンセプト</h2>
        <p>
          音楽ストリーミングサービスにおけるレコメンドアルゴリズムは、ユーザーの嗜好を強化する一方で、新しいジャンルとの出会いを妨げる傾向があります。<br />
          Audio Canvasは、Spotify APIで取得した楽曲の特徴量をグラフィックに変換し、「視覚的に音楽を探索できる環境」を提供します。視覚情報から直感的に楽曲の雰囲気を捉えることで、未知の音楽との出会いを促進します。
        </p>
      </section>

      {/* ✅ 「提案タブへ」ボタン */}
      <div className="mt-10">
          {/* 現在の内容の下などにボタン追加 */}
          <button
            onClick={() => onChangeTab('proposal')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            提案タブへ移動
          </button>
      </div>
    </section>
  );
}

{/* 余裕があれば、技術スタックやシステムの仕組みなどの説明も追加する。

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-2">アプリの使い方</h2>
        <p>
          Audio Canvasは、ログインして使用するWebプラットフォームです。ユーザーはSpotifyアカウントでログイン後、自分の好きな楽曲を検索し、グラフィックに変換できます。<br />
          生成されたグラフィックは、アプリ内の「グラフィック一覧ページ」に公開され、他ユーザーも視覚情報のみで気になる楽曲を探すことが可能です。これにより、ジャンルや知名度にとらわれず、見た目の印象から新しい音楽と出会う体験を提供します。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-2">特徴と実装</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Spotify APIから8つの特徴量を取得（例：danceability, energy, valenceなど）</li>
          <li>楽曲を「穏やか／アグレッシブ／リズミカル／ポップス」の4分類にグルーピング</li>
          <li>各特徴量を色（HSB）や形状（極座標ベースの多角形）にマッピング</li>
          <li>loudnessやlivenessに応じて図形の数・配置も変化</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-2">技術スタックと工夫</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Spotify Web APIを用いた楽曲データの取得と整形</li>
          <li>分析に基づいた条件分岐でジャンル分類を自動化</li>
          <li>色彩や図形のバリエーションを抽象的印象とリンクさせた可視化アルゴリズム</li>
          <li>リズミカルグループのみ独自ロジック（カーブ＋線幅）を使用し、差別化を図る</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-2">今後の展望</h2>
        <p>
          今後は、グラフィック生成アルゴリズムの精度を高めるとともに、ユーザーが視覚から出会った楽曲をそのまま再生・保存できる体験設計を目指します。<br />
          また、ジャンル横断的に音楽を“地図”のように俯瞰できるUI構築も検討中です。
        </p>
      </section>
*/}