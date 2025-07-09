// Wind Sketch.tsx
'use client';

import { useRef, useEffect } from 'react';

export type SketchProps = { size?: number };
export default function SpiralGridSketch({ size = 800 }: SketchProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  /* 既存ノードを初期化 */
  useEffect(() => {
    if (wrap.current) while (wrap.current.firstChild)
      wrap.current.removeChild(wrap.current.firstChild);
  }, []);

  /* p5 セットアップ */
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!wrap.current || p5Ref.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const DIV = 20;
        let cols: number, rows: number;

        p.setup = () => {
          p.createCanvas(size, size);
          cols = p.width / DIV;
          rows = p.height / DIV;
        };

        p.draw = () => {
          p.background(255);
          const cx = p.width / 2;
          const cy = p.height / 2;
          const time = p.frameCount * 0.05;

          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              const x1 = i * DIV + DIV / 2;
              const y1 = j * DIV + DIV / 2;

              const dx = x1 - cx;
              const dy = y1 - cy;
              const dist = p.sqrt(dx * dx + dy * dy);

              const base = p.atan2(dy, dx);
              const angle = base + p.log(dist + 1) + time;

              const x2 = x1 + DIV * p.cos(angle);
              const y2 = y1 + DIV * p.sin(angle);

              p.stroke(0);
              p.strokeWeight(3);
              p.line(x1, y1, x2, y2);
            }
          }
        };
      };

      if (!cancelled) p5Ref.current = new p5(sketch, wrap.current!);
    };

    load();

    /* cleanup */
    return () => {
      cancelled = true;
      p5Ref.current?.remove();
      p5Ref.current = null;
      if (wrap.current) while (wrap.current.firstChild)
        wrap.current.removeChild(wrap.current.firstChild);
    };
  }, [size]);

  return <div ref={wrap} />;
}
