// app/(piece)/works/[slug]/ClientProjectPage.tsx
'use client';

import { useState } from 'react';
import HeaderB from '@/app/components/header/HeaderB';
import ProjectContentRenderer from '@/components/projects/ProjectContentRenderer';

type Tab = { id: string; label: string };

type Props = {
  slug: string;
  data: {
    title: string;
    period: string;
    tools: string[];
    tabs: Tab[];
  };
};

export default function ClientProjectPage({ slug, data }: Props) {
  const [selectedTab, setSelectedTab] = useState(data.tabs[0].id);

  return (
    <>
      <HeaderB
        {...data}
        selectedTab={selectedTab}
        onChangeTab={setSelectedTab}
      />
      <main className="px-6 max-w-5xl mx-auto pt-6 pb-6">
        <ProjectContentRenderer
          slug={slug}
          selectedTab={selectedTab}
          onChangeTab={setSelectedTab}
        />
      </main>
    </>
  );
}
