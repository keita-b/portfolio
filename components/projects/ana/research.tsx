// components/projects/ana/intro.tsx

export default function ANAIntro({
  onChangeTab,
}: {
  onChangeTab: (id: string) => void;
}) {
  return (
  <section>
    <main className="px-8 py-12 max-w-5xl mx-auto space-y-16">
      {/* ヘッダー */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">ANA × ブランド戦略とデザイン — Team C</h1>
        <p className="text-sm text-gray-500">
          Brand Strategy &amp; Design Collaboration&nbsp;/&nbsp;2025 Spring
        </p>
        <p className="text-sm">
          Members&nbsp;:&nbsp;今井啓太&nbsp;|&nbsp;太田ゆり&nbsp;|&nbsp;キム&nbsp;ナヨン&nbsp;|&nbsp;前田悠斗
        </p>
      </header>

      {/* 課題の概要 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">課題の概要</h2>
        <p>
          ANA の強みである「人と地域をつなぐネットワーク」を活かし、若年層（20–30 代）の移動需要を
          喚起しながら地域活性化を図るブランド施策を提案しました。ゴールは
          <strong>①継続的なタッチポイントの構築&nbsp;②旅前〜旅後までのブランド体験最適化</strong> です。
        </p>
      </section>

      {/* グループワークの進め方 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">グループワークの進め方</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Mission 設定（課題の言語化）</li>
          <li>仮説立案：人はなぜ移動するのか？</li>
          <li>リサーチ分担：SNS 定量 / インタビュー / 二次データ</li>
          <li>Miro でインサイト抽出 → STP 設計</li>
          <li>スライド作成 &amp; 模擬プレゼン → 本発表</li>
        </ol>
      </section>

      {/* 調査の内容 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">調査の内容</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>SNS 投稿 3,000 件以上をスクレイピング（移動系ワード）</li>
          <li>祭り主催者 2 名・参加経験者 4 名へオンラインインタビュー</li>
          <li>NTT 東日本「全国の祭り・イベント実態調査 2023」など二次データ</li>
        </ul>
      </section>

      {/* 調査の分析 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">調査の分析</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Insight 1 — つながり欲求</h3>
            <p>
              地元の食・景色・人との再会を求める投稿が多く、
              <em>寂しさや安心感を満たす</em> ことが移動動機になると判明。
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">Insight 2 — 刺激欲求</h3>
            <p>
              非日常体験への好奇心・興奮を求める声も多数。
              旅行初心者だけでなく日常に飽きた社会人にも刺さる。
            </p>
          </div>
        </div>
      </section>

      {/* STPなど戦略の決定 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">STP &amp; 戦略の決定</h2>
        <p>
          Segmentation は「心理的距離 × 経験有無」マトリクスで分類し、
          下記 2 クラスタをターゲットに設定。
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>家族や地元から離れて暮らす若年層（寂しさクラスタ）</li>
          <li>マンネリに飽きた社会人・学生（刺激クラスタ）</li>
        </ul>
        <p>
          Positioning キーワードは
          <strong>“空を介して人と地域をつなぐエモーショナル・アンカー”</strong>
          。Value Proposition は
          <strong>「賑々しいふるさと：繋がりが生む新たな居場所」</strong>
          です。
        </p>
      </section>

      {/* 提案内容 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">提案内容</h2>

        {/* 1. 祭りパッケージ */}
        <article className="space-y-2">
          <h3 className="text-xl font-semibold">1. 祭り特化型トラベルパッケージ</h3>
          <p>
            航空券・祭り参加枠・宿泊を一括販売。参加証として NFT
            を発行し、帰宅後も 3D データで思い出を想起。
          </p>
        </article>

        {/* 2. ステークホルダー価値 */}
        <article className="space-y-2">
          <h3 className="text-xl font-semibold">2. 三者メリット設計</h3>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-1 text-left">ステークホルダー</th>
                  <th className="border px-3 py-1 text-left">得られる価値</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-1 font-medium">参加者</td>
                  <td className="border px-3 py-1">
                    孤独解消・地域交流・NFT コレクション
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-1 font-medium">祭り主催者</td>
                  <td className="border px-3 py-1">
                    資金・人手不足解消、全国 PR
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-1 font-medium">ANA</td>
                  <td className="border px-3 py-1">
                    移動需要創出、ブランド価値向上、新規 B2B 機会
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* 3. カスタマージャーニー */}
        <article className="space-y-2">
          <h3 className="text-xl font-semibold">3. カスタマージャーニー</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>旅前&nbsp;:</strong>&nbsp;Web/SNS 広告 → パック購入 → NFT 受領
            </li>
            <li>
              <strong>旅中&nbsp;:</strong>&nbsp;祭り準備ボランティア → 祭り参加 → コミュニティ形成
            </li>
            <li>
              <strong>旅後&nbsp;:</strong>&nbsp;NFT 更新・SNS シェア → リピート誘導
            </li>
          </ol>
        </article>
      </section>
    </main>


      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => onChangeTab('proposal')}
      >
        提案を見る
      </button>
    </section>
  );
}
