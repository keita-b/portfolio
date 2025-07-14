// components/DynamicMiniSketch.tsx
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

type SketchProps = { size?: number };      // ← Sketch が受け取る props を定義
type Props = { slug: string; canvasSize?: number };

export default function DynamicMiniSketch({ slug, canvasSize }: Props) {
  /** slug → import 関数のマッピング */
  const importMap: Record<string, () => Promise<any>> = {
    'rotate-lines': () => import('@/components/RotateLineSketch'),
    'color-rotate-lines': () => import('@/components/ColorRotateLineSketch'),
    'fireworks': () => import('@/components/FireworksSketch'),
    'ripples': () => import('@/components/RippleSketch'),
    'wind': () => import('@/components/WindSketch'),
    'digit-line': () => import('@/components/DigitLineSketch'),
    // 追加するときはここに行を増やす


    'image-to-line': () => import('@/components/ImageToLineSketch'),
  };

  const importFn = importMap[slug];
  if (!importFn) return <p>Sketch not found: {slug}</p>;

  /** ★ 型を注入して dynamic 生成 */
  const Sketch = dynamic<SketchProps>(
    () => importFn().then((mod) => mod.default as React.ComponentType<SketchProps>),
    { ssr: false }
  );

  return <Sketch size={canvasSize} />;
}
