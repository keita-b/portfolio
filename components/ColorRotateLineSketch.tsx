'use client';

import { useRef, useEffect } from 'react';

export default function ColorRotateLineSketch() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    if (wrapRef.current) {
      while (wrapRef.current.firstChild) {
        wrapRef.current.removeChild(wrapRef.current.firstChild);
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!wrapRef.current || p5Ref.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const DIV = 40;
        let cols: number, rows: number;

        p.setup = () => {
          const parentWidth = p._userNode.offsetWidth;
          const parentHeight = p._userNode.offsetHeight;
          p.createCanvas(parentWidth, parentHeight);
          p.colorMode(p.HSB, 360, 100, 100);
          cols = p.width / DIV;
          rows = p.height / DIV;
        };

        p.windowResized = () => {
            const parentWidth = p._userNode.offsetWidth;
            const parentHeight = p._userNode.offsetHeight;
            p.resizeCanvas(parentWidth, parentHeight);
          cols = p.width / DIV;
          rows = p.height / DIV;
        };

        p.draw = () => {
          p.background(360, 0, 0); // 黒 (HSB)

          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              const x1 = i * DIV + DIV / 2;
              const y1 = j * DIV + DIV / 2;
              const angle = p.atan2(p.mouseY - y1, p.mouseX - x1);

              const x2 = x1 + (DIV / 2) * p.cos(angle);
              const y2 = y1 + (DIV / 2) * p.sin(angle);

              const hue = p.map(p.degrees(angle), -180, 180, 0, 360);
              p.stroke(hue, 50, 50); // (色相, 彩度, 明度)
              p.strokeWeight(3);
              p.line(x1, y1, x2, y2);
            }
          }
        };
      };

      if (!cancelled) p5Ref.current = new p5(sketch, wrapRef.current!);
    };

    load();

    return () => {
      cancelled = true;
      p5Ref.current?.remove();
      p5Ref.current = null;
      if (wrapRef.current) {
        while (wrapRef.current.firstChild) {
          wrapRef.current.removeChild(wrapRef.current.firstChild);
        }
      }
    };
  }, []);

  return <div ref={wrapRef} className="w-full h-full" />;
}
