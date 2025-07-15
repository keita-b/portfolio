import TheNumberOfLoveIntro from '@/components/projects/the-number-of-love/Intro';

import AudioCanvasIntro from '@/components/projects/audioCanvas/Intro';
import AudioCanvasProposal from '@/components/projects/audioCanvas/Proposal';

import ANAIntro from '@/components/projects/ana/Intro';

import MichibataOnBlackIntro from '@/components/projects/michibataonblack/Intro';

import ExperimentalIntro from '@/components/projects/experimentalgraphics/Intro'


export default function ProjectContentRenderer({
  slug,
  selectedTab,
  onChangeTab,
}: {
  slug: string;
  selectedTab: string;
  onChangeTab: (id: string) => void;
}) {
  if(slug === 'the-number-of-love') {
    switch (selectedTab) {
      case 'intro':
        return <TheNumberOfLoveIntro onChangeTab={onChangeTab} />;
    }
  }
  else if (slug === 'audio-canvas') {
    switch (selectedTab) {
      case 'intro':
        return <AudioCanvasIntro onChangeTab={onChangeTab} />;
      case 'proposal':
        return <AudioCanvasProposal />;
    }
  }
  else if(slug === 'ana'){
    switch (selectedTab) {
      case 'intro':
        return <ANAIntro onChangeTab={onChangeTab} />;
    }
  }
  else if (slug === 'michibata-on-black') {
    switch (selectedTab) {
      case 'intro':
        return <MichibataOnBlackIntro onChangeTab={onChangeTab} />;
    }
  }
  else if (slug === 'experimental-work') {
    switch (selectedTab) {
      case 'intro':
        return <ExperimentalIntro onChangeTab={onChangeTab} />;
    }
  }

  return <p>未対応のプロジェクトです</p>;
}
