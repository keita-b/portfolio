import AudioCanvasIntro from '@/components/projects/audioCanvas/Intro';
import AudioCanvasProposal from '@/components/projects/audioCanvas/Proposal';
import AudioCanvasPrototype from '@/components/projects/audioCanvas/Prototype';

export default function ProjectContentRenderer({
  slug,
  selectedTab,
}: {
  slug: string;
  selectedTab: string;
}) {
  if (slug === 'audio-canvas') {
    switch (selectedTab) {
      case 'intro':
        return <AudioCanvasIntro />;
      case 'proposal':
        return <AudioCanvasProposal />;
      case 'prototype':
        return <AudioCanvasPrototype />;
    }
  }

  return <p>未対応のプロジェクトです</p>;
}
