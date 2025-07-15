'use client';

type Tab = { id: string; label: string };

type Props = {
  title: string;
  period: string;
  skills: string[];
  tabs: Tab[];
  selectedTab: string;
  onChangeTab: (id: string) => void;
};

export default function HeaderWithTabs({
  title,
  period,
  skills,
  tabs,
  selectedTab,
  onChangeTab,
}: Props) {
  return (
    <header className="bg-black text-white px-4 py-2 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h1 className="text-lg font-bold">{title}</h1>
          <span className="text-sm text-gray-400">{period}</span>
          <span className="text-sm text-gray-400">{skills.join(' / ')}</span>
        </div>
        <nav className="flex gap-4 mt-2 md:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`text-sm hover:text-gray-300 ${
                selectedTab === tab.id ? 'underline' : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
