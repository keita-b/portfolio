import Image from 'next/image';

export default function WorkDetailPage() {
  return (
    <div>
      <h1>作品詳細ページ</h1>
      <p>ここに詳細を表示します。</p>
      
      <div className="relative mx-auto w-full">
        <Image
          src="/thumbnails/works/experimental.png"
          alt="face"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />

        <Image
          src="/works/experimental/mirror.png"
          alt="mirror"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />

        <Image
          src="/works/experimental/guardrail.png"
          alt="guardrail"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />

        <Image
          src="/works/experimental/guardrail2.png"
          alt="guardrail2"
          width={1200} // 高解像度画像にも対応
          height={800}
          className="object-contain w-full h-auto border border-gray-300"
        />
      </div>

    </div>
    
  );
}
