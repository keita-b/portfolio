// それぞれの作品の詳細ページに載せる内容

type ProjectMeta = {
  title: string;
  period: string;
  tools: string[];
  tabs: { id: string; label: string }[];
};

export const projectData: Record<string, ProjectMeta> = {
  'the-number-of-love': {
    title: 'The Number of "Love" In The Beatles Album',
    period: '2023.05',
    tools: ['Gravid Desginer'],
    tabs: [
      { id: 'intro', label: '制作背景' },
    ],
  },
  'audio-canvas': {
    title: 'Audio Canvas',
    period: '2024.12 ~ 2025.03',
    tools: ['processing', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
      { id: 'proposal', label: '提案' },
    ],
  },
  'ana': {
    title: 'ANA',
    period: '2025.06 ~ 2025.07',
    tools: [''],
    tabs: [
      { id: 'intro', label: '概要' },
      { id: 'research', label: '調査' },
      { id: 'proposal', label: '提案' },
    ],
  },
  'michibata-on-black': {
    title: '道端オンブラック',
    period: '2024.04 ~ 2025.03',
    tools: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '活動内容' },
      { id: 'web', label: 'Webサイト' },
      { id: 'degree-show', label: 'ゼミ展' },
    ],
  },
  'experimental-work': {
    title: '卒業制作',
    period: '2025.04 ~',
    tools: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
    ],
  },
};
