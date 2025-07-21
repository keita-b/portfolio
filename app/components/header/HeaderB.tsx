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
    <header className="bg-black text-white px-4 pt-5 pb-2 sticky top-0 z-50 border-b">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        
        {/* 左：タイトルと戻るボタン */}
        <div className="flex items-center gap-2">
          <Link href="/works" className="text-sm hover:text-gray-300">◀︎</Link>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>

        {/* 中央：制作期間とスキル */}
        <div className="flex flex-wrap gap-x-4 text-sm text-gray-400">
          <span>project duration: {period}</span>
          <span>tools: {tools.join(' / ')}</span>
        </div>

        {/* 右：タブ */}
        <div className="mt-2 md:mt-0">
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
                  className={`text-sm px-3 py-1 border rounded ${
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
