import Image from 'next/image';

export default function CookieIntro() {
  return (
        <div className="mx-auto px-6 py-6 space-y-6">
            <p className="text-gray-500 leading-relaxed">
                <strong>制作背景</strong>
                <br />
                学部2年次の「プロダクトデザイン」の授業で、クッキーをテーマに企画から制作、パッケージのデザインまで行うグループワークに取り組んだ。
            </p>
        
            <p className="text-gray-500 leading-relaxed">
                <strong>作品説明</strong>
                <br />
                「甘いものとしょっぱいものを交互に食べると手が止まらなくなる！」という誰もが一度は経験したことのある感覚を1つの商品で再現することを目指し、「2 in 1」という名前のクッキーを企画・制作した。
                <br />
                チョコ味とチーズ味という対照的な2種類の味を1つのパッケージに収めることで、飽きずに交互に楽しめるように設計している。
                <br />
                想定シーンは、自宅で4人以上が集まってお菓子パーティーを開くような場面。パッケージは箱を開けると六角形の器に変形し、大人数でもどこからでも取りやすい構造になっている。
            </p>
        
            <div className="relative mx-auto w-full">
                <Image
                    src="/thumbnails/works/cookie.png"
                    alt="audio canvas"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto mt-10"
                />
            </div>
        </div>
  );
}