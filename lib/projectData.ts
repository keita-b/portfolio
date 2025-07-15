// それぞれの作品の詳細ページに載せる内容

type ProjectMeta = {
  title: string;
  period: string;
  skills: string[];
  tabs: { id: string; label: string }[];
};

export const projectData: Record<string, ProjectMeta> = {
  'the-number-of-love': {
    title: 'The Number of Love',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
    ],
  },
  'audio-canvas': {
    title: 'Audio Canvas',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
      { id: 'proposal', label: '提案' },
    ],
  },
  'ana': {
    title: 'ANA',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
    ],
  },
  'michibata-on-black': {
    title: '道端オンブラック',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
      { id: 'proposal', label: '提案' },
    ],
  },
  'experimental-work': {
    title: '卒業制作',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
      { id: 'proposal', label: '提案' },
    ],
  },
};
