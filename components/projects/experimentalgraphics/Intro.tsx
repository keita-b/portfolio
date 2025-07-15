type Props = {
  onChangeTab: (id: string) => void;
};

export default function WorkDetailPage({ onChangeTab }: Props) {
  return (
    <div>
      <h1>作品詳細ページ</h1>
      <p>ここに詳細を表示します。</p>
      
      <div className="mt-10">
        {/* 現在の内容の下などにボタン追加 */}
        <button
          onClick={() => onChangeTab('proposal')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          提案タブへ移動
        </button>
      </div>

    </div>
    
  );
}
