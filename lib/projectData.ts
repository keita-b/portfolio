type ProjectMeta = {
  title: string;
  period: string;
  skills: string[];
  tabs: { id: string; label: string }[];
};

export const projectData: Record<string, ProjectMeta> = {
  'audio-canvas': {
    title: 'Audio Canvas',
    period: '2024.04 ~ 2025.03',
    skills: ['Next.js', 'Spotify API'],
    tabs: [
      { id: 'intro', label: '制作背景' },
      { id: 'proposal', label: '提案' },
      { id: 'prototype', label: '体験' },
    ],
  },
};
