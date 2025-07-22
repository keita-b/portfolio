'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Tab = { id: string; label: string };

type Props = {
  title: string;
  period: string;
  tools: string[];
  tabs: Tab[];
  selectedTab: string;
  onChangeTab: (id: string) => void;
};

export default function HeaderWithTabs({
  title,
  period,
  tools,
  tabs,
  selectedTab,
  onChangeTab,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="bg-black text-white px-4 pt-5 pb-3 sticky top-0 z-50 border-b">
      <div className="flex flex-row justify-between items-center">

        {/* 左：タイトル・期間・ツール */}
        <div className="flex gap-1 flex-row items-center gap-4">
          <Link href="/works" className="text-m hover:text-gray-300 ml-3">◀︎</Link>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 pl-1">
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="text-sm text-gray-400 mt-1 pl-1">
              <span>Period: {period}</span>
              <span className='mr-2 ml-2'> / </span>
              <span>Tools: {tools.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* 右：タブ */}
        <div className="items-center">
          {isMobile ? (
            <select
              value={selectedTab}
              onChange={(e) => onChangeTab(e.target.value)}
              className="bg-black border border-white text-white text-sm px-2 py-1"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          ) : (
            <nav className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onChangeTab(tab.id)}
                  className={`text-sm px-4 py-1 border rounded ${
                    selectedTab === tab.id
                      ? 'bg-white text-black'
                      : 'text-white border-white hover:bg-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}
        </div>

      </div>
    </header>

  );
}
