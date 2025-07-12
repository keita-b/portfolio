'use client';

import { useRef, useEffect } from 'react';

export default function SpiralGridSketch() {
  const wrap = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    if (wrap.current) {
      while (wrap.current.firstChild) {
        wrap.current.removeChild(wrap.current.firstChild);
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!wrap.current || p5Ref.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const DIV = 16;
        let cols: number, rows: number;

        p.setup = () => {
          const parentWidth = p._userNode.offsetWidth;
          const parentHeight = p._userNode.offsetHeight;
          p.createCanvas(parentWidth, parentHeight);
          p.colorMode(p.RGB, 255);
        };

        p.windowResized = () => {
          const parentWidth = p._userNode.offsetWidth;
          const parentHeight = p._userNode.offsetHeight;
          p.resizeCanvas(parentWidth, parentHeight);
        };

        p.draw = () => {
          p.background(255);

          const cols = Math.floor(p.width / DIV);
          const rows = Math.floor(p.height / DIV);

          const t = p.frameCount * 0.001;

          // 中心位置：ノイズにより滑らかにランダム移動（画面外に出ない）
          const cx = p.noise(t + 100) * p.width;
          const cy = p.noise(t + 500) * p.height;

          // 回転速度：ノイズで滑らかに変化（例：0.02〜0.2）
          const rotationSpeed = p.map(p.noise(t + 1000), 0, 1, 0.05, 0.1);
          const time = p.frameCount * rotationSpeed;

          p.stroke(0);
          p.strokeWeight(2);

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

              p.line(x1, y1, x2, y2);
            }
          }
        };

      };

      if (!cancelled) {
        p5Ref.current = new p5(sketch, wrap.current!);
      }
    };

    load();

    return () => {
      cancelled = true;
      p5Ref.current?.remove();
      p5Ref.current = null;
      if (wrap.current) {
        while (wrap.current.firstChild) {
          wrap.current.removeChild(wrap.current.firstChild);
        }
      }
    };
  }, []);

  return <div ref={wrap} className="w-full h-full" />;
}
