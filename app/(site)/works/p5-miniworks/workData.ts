// app/works/p5-miniworks/workData.ts
export const miniWorks = [
  {
    slug: 'rotate-lines',
    title: 'Rotate Lines',
    description: 'マウス位置に反応して方向が変わる線のアニメーション。',
  },
  {
    slug: 'color-rotate-lines',
    title: 'Color Rotate Lines',
    description: 'マウス位置に反応して方向と色が変わる線のアニメーション。',
  },
  {
    slug: 'fireworks',
    title: 'Fireworks',
    description: 'ランダムに打ち上がる花火のアニメーション。',
  },
  { slug: 'ripples',
    title: 'Ripples',
    description: '同心円の波紋アニメ'
  },
  {
    slug: 'wind',
    title: 'Wind',
    description: '風'
  },
  {
    slug: 'digit-line',
    title: 'Digit Line',
    description: 'デジタル数字'
  },
] as const;

export type MiniWork = (typeof miniWorks)[number];
