// それぞれの作品の詳細ページに載せる内容

type ProjectMeta = {
  title: string;
  period: string;
  tools: string[];
  tabs: { id: string; label: string }[];
};

export const projectData: Record<string, ProjectMeta> = {
  'cookie': {
    title: 'Cookie Design Project "2 in 1"',
    period: '2021.06',
    tools: ['紙粘土', '真空成形機', 'Gravid Designer'],
    tabs: [
      { id: 'intro', label: 'work' },
    ],
  },
  'the-number-of-love': {
    title: 'The Number of "Love" In The Beatles Album',
    period: '2023.05',
    tools: ['Gravid Desginer'],
    tabs: [
      { id: 'intro', label: 'work' },
    ],
  },
  'audio-canvas': {
    title: 'Audio Canvas',
    period: '2024.12 ~ 2025.03',
    tools: ['processing', 'Spotify API'],
    tabs: [
      { id: 'intro', label: 'work' },
    ],
  },
  'ana': {
    title: 'ANA New Business Proposal',
    period: '2025.06 ~ 2025.07',
    tools: ['Marketing Framework'],
    tabs: [
      { id: 'intro', label: 'background' },
      { id: 'research', label: 'research' },
      { id: 'stp', label: 'STP' },
      { id: 'proposal', label: 'proposal' },
    ],
  },
  'michibata-on-black': {
    title: '道端オンブラック',
    period: '2024.04 ~ 2025.03',
    tools: ['HTML CSS Java Script', 'Illustrator', 'Photoshop', 'InDesign', 'Camera'],
    tabs: [
      { id: 'intro', label: '活動内容' },
      { id: 'web', label: 'Webサイト' },
      { id: 'degree-show', label: 'ゼミ展' },
      { id: 'mob-book', label: '本' },
    ],
  },
  'experimental-work': {
    title: '卒業制作',
    period: '2025.04 ~',
    tools: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: 'work' },
    ],
  },
};
