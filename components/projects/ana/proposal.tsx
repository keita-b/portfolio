import Image from 'next/image';

export default function ANAIProposal() {
  return (
    <div className="mx-auto max-w-2xl py-6 space-y-6 text-gray-500">
      <p className="leading-relaxed mb-4">
        <strong className="block mb-6">提案の概要</strong>
        安心感やつながりを求める人々の欲求を満たすために、祭りへの参加を通じて地域との関係を築く移動体験を提案した。
      </p>

      <div className="overflow-hidden rounded border border-gray-200">
        <table className="w-full text-sm text-gray-500">
          <tbody>
            <tr>
              <th className="text-center font-semibold border-r border-b border-gray-200 px-3 py-2 w-[90px]">Copy</th>
              <td className="px-3 py-2 border-b border-gray-200">賑々しいふるさと</td>
            </tr>
            <tr>
              <th className="text-center font-semibold border-r border-b border-gray-200 px-3 py-2">Service</th>
              <td className="px-3 py-2 border-b border-gray-200">祭り体験型の旅行パックを販売（航空券＋NFT参加証＋体験）</td>
            </tr>
            <tr className="align-middle">
              <th className="text-center font-semibold border-r border-b border-gray-200 px-3 py-2">Target</th>
              <td className="px-3 py-2 space-y-1 border-b border-gray-200">
                <p>家族・地元から離れてある程度時間が経った人</p>
                <p>会社での生活に疲れた人</p>
                <p>普段の生活に寂しさを感じている人</p>
              </td>
            </tr>
            <tr>
              <th className="text-center font-semibold border-r border-gray-200 px-3 py-2">Goal</th>
              <td className="px-3 py-2">一時的な移動にとどまらない、心のよりどころとしての地域との関係構築</td>
            </tr>
          </tbody>
        </table>
      </div>


      <hr className="my-16 border-gray-300" />


      <p className="leading-relaxed mb-4">
        <strong className="block mb-6">サービスの詳細</strong>
        このサービスはANA、祭り主催者、参加者の三者が相互に関係し、協働によって価値を生み出す仕組みとなっている。
      </p>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
        <li><strong>ANA：</strong> 祭りの企画・運営を補助し、地域の人と参加者のつながりを促進する</li>
        <li><strong>主催者：</strong> ANAと協力して参加者のニーズを満たす企画を立て、祭りの運営を行う</li>
        <li><strong>参加者：</strong> 祭りへの参加を通して地域とのつながりを感じ、寂しさの解消や安心感を得る</li>
      </ul>

      <div className="relative mx-auto w-full">
        <Image
          src="/works/ana/proposal/stakeholder.png"
          alt="ステークホルダーマップ"
          width={1200}
          height={800}
          className="object-contain w-full h-auto border border-gray-200 p-3"
        />
      </div>


      <hr className="my-16 border-gray-300" />


      <p className="leading-relaxed mb-4">
        <strong className="block mb-6">体験の流れ</strong>
         旅行パック購入から祭り体験、そして帰宅後の振り返りまで、参加者は3つのシーンを通じて地域とのつながりを実感する体験を得る。
      </p>
      <div className="relative mx-auto w-full">
        <Image
          src="/works/ana/proposal/user.png"
          alt="カスタマージャーニー"
          width={1200}
          height={800}
          className="object-contain w-full h-auto border border-gray-200 p-3"
        />
      </div>

      <p className="leading-relaxed mb-4">
        このように、地方創生に貢献しながらターゲットの欲求を満たすことのできるサービスとした。
        <br />
        また、祭りという一時的な体験にNFTを組み込み、祭り後にも価値を提供することで、継続的なタッチポイントの構築を目指した。
      </p>

    </div>
  );
}