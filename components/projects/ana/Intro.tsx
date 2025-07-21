// components/projects/ana/intro.tsx

type Props = {
  onChangeTab: (id: string) => void;
};

export default function ANAIntro({ onChangeTab }: Props) {
  return (
    <div className="mx-auto max-w-2xl py-6 space-y-6 text-gray-500">
      <p className="leading-relaxed mb-4">
        <strong className="block mb-6">概要</strong>
        修士1年時、ANAと連携した「ブランド戦略とデザイン」という授業で、ANAの担当者から提示された実際の企業課題を解決するグループワークを行なった。
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded p-4">
        <p className="mb-2">課題</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>移動需要を喚起するブランディング</li>
          <li>顧客との自然で継続的なタッチポイントの構築</li>
          <li>上記をもとにした具体的なプロダクト開発</li>
        </ul>
        <p className="mt-2 text-sm mb-0">
          また、ANAのNFT事業を活用することが必須条件だった。
        </p>
      </div>



      <hr className="my-16 border-gray-300" />



      <div className="my-10">
        <strong className="block mb-6">方針</strong>
      </div>
      <p className="leading-relaxed mb-3">
        課題に取り組むにあたり、目的を以下のように整理した。
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded p-4">
        <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed mb-0">
          <li>移動需要の喚起</li>
          <li>継続的なタッチポイントの構築</li>
          <li>新規顧客の獲得</li>
        </ul>
      </div>

      <p className="leading-relaxed mb-3">
        また、ANAの強みと課題を把握するため、統合報告書や公式サイトを調査した。
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded p-4">
        <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed mb-0">
          <li>地方創生に積極的に取り組んでいる</li>
          <li>人とのつながりを大切にしている</li>
          <li>ターゲットが明確でなく、強みが一般ユーザーに伝わりにくい</li>
        </ul>
      </div>
      <p className="leading-relaxed mb-0">
        <br />
        そこで、ターゲットを設定するため、「人はなぜ移動するのか？」という根源的な問いについて仮説を立て、調査を行なった。
      </p>

      <div className="mt-10">
        <button
          onClick={() => onChangeTab('research')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          reserch →
        </button>
      </div>
    </div>
  );
}
