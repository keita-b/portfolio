// components/projects/ana/research.tsx
import Image from 'next/image';

type Props = {
  onChangeTab: (id: string) => void;
};

export default function ANASTP({ onChangeTab }: Props) {

  return (
    <div className="mx-auto px-6 py-6 max-w-2xl space-y-6 text-gray-500 leading-relaxed">
        <p>
            <strong className="block mb-1">STP：Segmentation</strong>
            <br />
            インサイトで明らかになった欲求を満たすことができる移動先を検討するため、場所についてセグメンテーションを行なった。
        </p>
        {/* スライドショー画像表示 */}
        <div className="relative w-full rounded overflow-hidden">
            <Image
            src="/works/ana/research/segment.png"
            alt="インサイト"
            width={1200}
            height={800}
            className="object-contain w-full h-auto border border-gray-200 p-3"
            />
        </div>


        <p>
            <br />
            ここで、各セグメントの特徴とユーザーの欲求を比較すると、次の表のようになる。
        </p>

        <div className="overflow-x-auto mt-6">
            <div className="overflow-x-auto mt-6 mb-6">
            <table className="min-w-full text-left text-sm border border-gray-300">
                <thead className="bg-gray-100 text-gray-600">
                <tr>
                    <th className="px-4 py-2 border-b border-gray-300">セグメント</th>
                    <th className="px-4 py-2 border-b border-gray-300">ユーザーの欲求との関係</th>
                </tr>
                </thead>
                <tbody className="text-gray-600">
                <tr>
                    <td className="px-4 py-3 border-b border-gray-300">
                    第1象限：<br />
                    <span className="text-xs text-gray-400">心理的距離が近く<br />経験とつながりがある</span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-300">
                    安心感や懐かしさを満たすが、既存の移動で満たされている。
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 border-b border-gray-300">
                        第2象限：<br />
                        <span className="text-xs text-gray-400">心理的距離が遠く<br />経験とつながりがある</span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-300">
                    ユーザーの欲求とギャップが生じやすい。
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3 border-b border-gray-300">
                        第3象限：<br />
                        <span className="text-xs text-gray-400">心理的距離が遠く<br />経験とつながりがない</span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-300">
                    好奇心を満たす。
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-3">
                        第4象限：<br />
                        <span className="text-xs text-gray-400">心理的距離が近く<br />経験とつながりがない</span>
                    </td>
                    <td className="px-4 py-3">
                    安心感や懐かしさを満たす。
                    <br />
                    未開拓な市場として可能性がある。
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>




        <hr className="my-20 border-gray-300" />




        <p>
            <br />
            <strong className="block mb-1">STP：Targeting</strong>
        </p>
        <p className="leading-relaxed mt-6">
        2つのインサイトのうち「好奇心」よりも「安心感やつながり」の方が、ANAが持つ「人とのつながりを大切にするブランド姿勢」と親和性が高い。
        <br />
        そのため、「寂しさを埋めたい・安心感が欲しい」という欲求を抱える人をターゲットに設定した。
        </p>

        <p className="leading-relaxed">
        また、移動先の中でも「心理的な距離感が近いが、自分の経験とつながりがない場所」は未開拓市場として有望。        
        <br />
        よって、このセグメントで、ターゲットの欲求を満たす施策を提案する。
        </p>

        <div className="relative mx-auto w-full">
            <Image
            src="/works/ana/research/target.png"
            alt="インサイト"
            width={1200}
            height={800}
            className="object-contain w-full h-auto border border-gray-200 p-3"
            />
        </div>

        <div className="mt-10">
            <button
            onClick={() => onChangeTab('proposal')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
            proposal →
            </button>
        </div>
    </div>
  );
}
