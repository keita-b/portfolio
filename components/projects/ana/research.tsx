//import Image from 'next/image';

type Props = {
  onChangeTab: (id: string) => void;
};

export default function ANAResearch({ onChangeTab }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">申し訳ありません。調整中です。</h2>

      <div className="mt-10">
        <button
          onClick={() => onChangeTab('proposal')}
          className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Research →
        </button>
      </div>
    </section>
  );
}
