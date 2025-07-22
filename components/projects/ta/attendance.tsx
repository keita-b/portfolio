'use client'

import Image from 'next/image'

type Props = {
  onChangeTab: (id: string) => void;
};

export default function Attendance({ onChangeTab }: Props) {
  return (
    <div className="mx-auto px-6 py-6 space-y-6">
        <p className="text-gray-500 leading-relaxed">
            <strong className='block'>背景</strong>
            <br />
            大学のTA業務では、これまで紙を用いて出席確認を行っていた。しかし、手作業による確認は集計ミスや不正出席の温床となりやすく、効率も悪いため、改善が求められていた。
            <br />
            そこで、Google Form, Google Spreadsheet, Google App Scriptを組み合わせた出席管理システムを構築した。
        </p>


        <hr className="my-16 border-gray-300" />

        <p className="text-gray-500 leading-relaxed">
            <strong className='block'>システムの詳細</strong>
            <br />
            ① 出席票となる Google フォームを作成
            <br />
            ② Google Apps Script を用いてトークン付きのフォームURLを生成し、QRコードに変換して表示
            <br />
            ③ 学生はこのQRコードを読み取り、出席票に回答
            <br />
            ④ Google スプレッドシート上でフォームの回答内容を取得し、関数を使って出席状況を自動で集計
        </p>
        <div className="relative mx-auto w-full">
            <Image
            src="/works/ta/attendance.png"
            alt="出席管理システム"
            width={1200}
            height={800}
            unoptimized
            className="object-contain w-full h-auto p-7 rounded border border-gray-300"
            />
        </div>

        <div className="mt-10">
            <button
            onClick={() => onChangeTab('print')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
            印刷予約システム →
            </button>
        </div>
        </div>
  )
}
