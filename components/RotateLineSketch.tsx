// components/RotateLineSketch.tsx
'use client';

import { useRef, useEffect } from 'react';

export type SketchProps = {
  size?: number;           // ついでに可変サイズ対応 (任意)
  options?: any;
};

export default function RotateLineSketch({
  size = 800,
  options,
}: SketchProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  /** ❶ 既存ノードを初手でクリーン */
  useEffect(() => {
    if (wrapperRef.current) {
      while (wrapperRef.current.firstChild) {
        wrapperRef.current.removeChild(wrapperRef.current.firstChild);
      }
    }
  }, []);

  /** ❷ p5 セットアップ */
  useEffect(() => {
    let isCancelled = false;

    const loadSketch = async () => {
      if (!wrapperRef.current || p5InstanceRef.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const DIV = 40;
        let cols: number, rows: number;

        p.setup = () => {
          p.createCanvas(size, size);
          cols = p.width / DIV;
          rows = p.height / DIV;
        };

        p.draw = () => {
          p.background(255);
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              const x1 = i * DIV + DIV / 2;
              const y1 = j * DIV + DIV / 2;
              const angle = p.atan2(p.mouseY - y1, p.mouseX - x1);
              const x2 = x1 + (DIV / 2) * p.cos(angle);
              const y2 = y1 + (DIV / 2) * p.sin(angle);
              p.stroke(0);
              p.strokeWeight(3);
              p.line(x1, y1, x2, y2);
            }
          }
        };
      };

      if (!isCancelled) {
        p5InstanceRef.current = new p5(sketch, wrapperRef.current!);
      }
    };

    loadSketch();

    /** ❸ 完全クリーンアップ */
    return () => {
      isCancelled = true;
      p5InstanceRef.current?.remove();
      p5InstanceRef.current = null;

      if (wrapperRef.current) {
        while (wrapperRef.current.firstChild) {
          wrapperRef.current.removeChild(wrapperRef.current.firstChild);
        }
      }
    };
  }, [size, JSON.stringify(options)]); // options がオブジェクトの場合は stringify で安定化

  return <div ref={wrapperRef} />;
}
