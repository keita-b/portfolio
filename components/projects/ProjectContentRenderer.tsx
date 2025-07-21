import CookieIntro from './cookie/Intro';

import TheNumberOfLoveIntro from '@/components/projects/the-number-of-love/Intro';

import AudioCanvasIntro from '@/components/projects/audioCanvas/Intro';

import ANAIntro from '@/components/projects/ana/Intro';
import ANAResearch from '@/components/projects/ana/research'
import ANASTP from '@/components/projects/ana/stp'
import ANAProposal from '@/components/projects/ana/proposal'

import MichibataOnBlackIntro from '@/components/projects/michibataonblack/Intro';
import MichibataOnBlackWeb from '@/components/projects/michibataonblack/web';
import MichibataOnBlackDegreeShow from '@/components/projects/michibataonblack/degree-show';
import MichibataOnBlackBook from '@/components/projects/michibataonblack/mob-book';

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
  if(slug === 'cookie') {
    switch (selectedTab) {
      case 'intro':
        return <CookieIntro />;
    }
  }
  else if (slug === 'the-number-of-love') {
    switch (selectedTab) {
      case 'intro':
        return <TheNumberOfLoveIntro />;
    }
  }
  else if (slug === 'audio-canvas') {
    switch (selectedTab) {
      case 'intro':
        return <AudioCanvasIntro />;
    }
  }
  else if(slug === 'ana'){
    switch (selectedTab) {
      case 'intro':
        return <ANAIntro onChangeTab={onChangeTab} />;
      case 'research':
        return <ANAResearch onChangeTab={onChangeTab} />;
      case 'stp':
        return <ANASTP onChangeTab={onChangeTab} />;
      case 'proposal':
        return <ANAProposal />;
    }
  }
  else if (slug === 'michibata-on-black') {
    switch (selectedTab) {
      case 'intro':
        return <MichibataOnBlackIntro onChangeTab={onChangeTab} />;
      case 'web':
        return <MichibataOnBlackWeb onChangeTab={onChangeTab} />;
      case 'degree-show':
        return <MichibataOnBlackDegreeShow onChangeTab={onChangeTab} />;
      case 'mob-book':
        return <MichibataOnBlackBook />
    }
  }
  else if (slug === 'experimental-work') {
    switch (selectedTab) {
      case 'intro':
        return <ExperimentalIntro />;
    }
  }

  return <p>未対応のプロジェクトです</p>;
}
