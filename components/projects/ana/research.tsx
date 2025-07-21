// components/projects/ana/research.tsx
import Image from 'next/image';

type Props = {
  onChangeTab: (id: string) => void;
};

export default function ANAResearch({ onChangeTab }: Props) {
  return (
    <div className="mx-auto px-6 py-6 max-w-2xl space-y-6 text-gray-500 leading-relaxed">
      
      <p>
        <strong className="block mb-1">仮説・調査</strong>
        <br />
        「人はなぜ移動するのか？」という問いに対して仮説を立て、移動に関する人々の本音を把握するため、Xの投稿を対象とした定性調査を実施。
        <br />
        「移動」「旅行」などのキーワードを含む合計120件の投稿を抽出・分析した。
      </p>
      <div className="relative mx-auto w-full">
        <Image
          src="/works/ana/research/hypothesis.png"
          alt="仮説"
          width={1200}
          height={800}
          className="object-contain w-full h-auto"
        />
      </div>




      <hr className="my-20 border-gray-300" />



      <p>
        <strong className="block mb-1">インサイト</strong>
        <br />
        調査の結果、移動の動機となる欲求と、その欲求を抱く人が明らかになった。
      </p>
      <div className="relative mx-auto w-full">
        <Image
          src="/works/ana/research/insight.png"
          alt="インサイト"
          width={1200}
          height={800}
          className="object-contain w-full h-auto"
        />
      </div>

      <div className="mt-10">
        <button
          onClick={() => onChangeTab('stp')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          STP →
        </button>
      </div>
    </div>
  );
}
