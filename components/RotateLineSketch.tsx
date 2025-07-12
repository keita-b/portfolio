'use client';

import { useRef, useEffect } from 'react';

export default function RotateLineSketch() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      while (wrapperRef.current.firstChild) {
        wrapperRef.current.removeChild(wrapperRef.current.firstChild);
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!wrapperRef.current || p5Ref.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const DIV = 44;
        let cols: number, rows: number;

        p.setup = () => {
          const w = p._userNode.offsetWidth;
          const h = p._userNode.offsetHeight;
          p.createCanvas(w, h);
          cols = Math.floor(w / DIV);
          rows = Math.floor(h / DIV);
        };

        p.windowResized = () => {
          const w = p._userNode.offsetWidth;
          const h = p._userNode.offsetHeight;
          p.resizeCanvas(w, h);
          cols = Math.floor(w / DIV);
          rows = Math.floor(h / DIV);
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

      if (!cancelled) {
        p5Ref.current = new p5(sketch, wrapperRef.current!);
      }
    };

    load();

    return () => {
      cancelled = true;
      p5Ref.current?.remove();
      p5Ref.current = null;
      if (wrapperRef.current) {
        while (wrapperRef.current.firstChild) {
          wrapperRef.current.removeChild(wrapperRef.current.firstChild);
        }
      }
    };
  }, []);

  return <div ref={wrapperRef} className="w-full h-full" />;
}
