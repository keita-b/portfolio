'use client'

import Image from 'next/image'
//import Link from 'next/link'

type Props = {
  onChangeTab: (id: string) => void;
};

export default function Print({ onChangeTab }: Props) {
  return (
    <div className="mx-auto px-6 py-6 space-y-6">        
        <p className="text-gray-500 leading-relaxed">
            <strong className='block'>制作背景</strong>
            <br />
            グラフィックデザインの授業でTAを担当した際、受講生約80名が自身の作品を印刷するために印刷機の予約を行う必要があった。しかし、従来はTAが手作業でスケジュールを調整しており、時間がかかるうえにミスも発生しやすい状況だった。
            <br />
            そこで、予約プロセスの自動化を提案し、Pythonの数理最適化ライブラリ「PuLP」を用いて、印刷スケジュールを自動生成するシステムを構築。生徒の空き時間を記載したExcelファイルをアップロードするだけで、最適な印刷スケジュールを出力できる仕組みとした。
        </p>

        <hr className="my-16 border-gray-300" />
      
        <p className="text-gray-500 leading-relaxed">
            <strong className='block'>システムの詳細</strong>
        </p>

        <div>
            <p className="text-gray-500 leading-relaxed mb-2">
                ① Excelファイルのアップロード
                <br />
                ローカルフォルダからエクセルファイルを選択してアップロード。
            </p>
            <div className="relative mx-auto w-full">
                <Image
                src="/works/ta/input.png"
                alt="印刷予約システム"
                width={1200}
                height={800}
                className="object-contain w-full h-auto border border-gray-300"
                />
            </div>
        </div>

        <div className='mt-12'>
            <p className="text-gray-500 leading-relaxed mb-2">
                ② 印刷スケジュールの自動生成・表示
                <br />
                アップロードされた情報を元に、印刷機を使用する時間帯の数を最小化するよう最適化されたスケジュールを出力。出力結果は日付ごとの表として表示・ダウンロード可能。
            </p>
            <div className="relative mx-auto w-full">
                <Image
                src="/works/ta/output.png"
                alt="印刷予約システム"
                width={1200}
                height={800}
                className="object-contain w-full h-auto border border-gray-300"
                />
            </div>
        </div>


        <div className="mt-10">
            <button
            onClick={() => onChangeTab('attendance')}
            className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
            出席管理システム →
            </button>
        </div>
    </div>
  )
}
