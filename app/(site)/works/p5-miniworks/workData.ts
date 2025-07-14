// app/works/p5-miniworks/workData.ts
export const miniWorks = [
  {
    slug: 'rotate-lines',
    title: 'Rotate Lines',
  },
  {
    slug: 'color-rotate-lines',
    title: 'Rotate Colorful Lines',
  },
  {
    slug: 'fireworks',
    title: 'Fireworks',
  },
  { slug: 'ripples',
    title: 'Ripples',
  },
  {
    slug: 'wind',
    title: 'Wind',
  },
  {
    slug: 'digit-line',
    title: 'Count up',
  },
] as const;

export type MiniWork = (typeof miniWorks)[number];
