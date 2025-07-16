import Image from 'next/image';

export default function WorkDetailPage() {
  return (
    <div className="mx-auto px-6 py-6 space-y-6">  
      <p className="text-gray-500 leading-relaxed">
        <strong>卒業制作【進行中】</strong>
        <br />
        現在、修士二年の卒業制作として、取り組んでいるプロジェクト。
        <br />
        Next.jsとp5jsを利用した画像加工アプリを制作中。
        そのアプリを使用して制作したグラフィックをご紹介します。
        <br />
        今後、作成したグラフィックをペンプロッターやレーザープリンターなどを用いて出力して、新たな表現を追求します。
      </p>
    
      <Image
        src="/thumbnails/works/experimental.png"
        alt="face"
        width={1200}
        height={800}
        className="object-contain w-full h-auto border border-gray-300"
      />

      <Image
        src="/works/experimental/mirror.png"
        alt="mirror"
        width={1200}
        height={800}
        className="object-contain w-full h-auto border border-gray-300"
      />

      <Image
        src="/works/experimental/guardrail.png"
        alt="guardrail"
        width={1200}
        height={800}
        className="object-contain w-full h-auto border border-gray-300"
      />

      <Image
        src="/works/experimental/guardrail2.png"
        alt="guardrail2"
        width={1200}
        height={800}
        className="object-contain w-full h-auto border border-gray-300"
      />
    </div>
  );
}
