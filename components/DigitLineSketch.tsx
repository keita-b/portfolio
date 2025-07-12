'use client';

import { useRef, useEffect } from 'react';
import type p5 from 'p5';

export default function DigitLineSketch({ delay = 1000 }: { delay?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (wrap.current) while (wrap.current.firstChild) wrap.current.firstChild.remove();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!wrap.current || p5Ref.current) return;
      const P5 = (await import('p5')).default;

      const sketch = (p: p5) => {
        const maskX = [
          0b1100000011, 0b0000000000, 0b1100110011, 0b1100110011, 0b0000110000,
          0b1100110011, 0b1100110011, 0b0000000011, 0b1100110011, 0b1100110011,
        ];
        const maskY = [
          0b101101101101, 0b010010010010, 0b001001100100, 0b100100100100,
          0b010010011011, 0b100100001001, 0b101101001001, 0b100100100101,
          0b101101101101, 0b100100101101,
        ];

        const digits: Digit[] = [];
        let timer = 0;
        let len = 0;
        let canvasW = 0;
        let canvasH = 0;
        let currentNum = 0;

        class Line {
          id: number;
          start: p5.Vector;
          end: p5.Vector;
          progress: number;
          speed = 0.05;
          state: 0 | 1 | 2;
          constructor(id: number, s: p5.Vector, e: p5.Vector, st: 0 | 1 | 2) {
            this.id = id;
            this.start = s.copy();
            this.end = e.copy();
            this.state = st;
            this.progress = st === 2 ? 0 : 1;
            if (p.random(1) < 0.5) this.swap();
          }
          swap() {
            const t = this.start;
            this.start = this.end;
            this.end = t;
          }
          ease(t: number) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          }
          update() {
            if (this.state === 0 && this.progress > 0)
              this.progress = Math.max(0, this.progress - this.speed);
            if (this.state === 2 && this.progress < 1)
              this.progress = Math.min(1, this.progress + this.speed);
          }
          draw() {
            if (this.progress === 0) return;
            const cur = this.start.copy().lerp(this.end, this.ease(this.progress));
            p.line(this.start.x, this.start.y, cur.x, cur.y);
          }
        }

        class Digit {
          idx: number;
          value: number;
          lines: Line[] = [];
          xOffset: number;

          constructor(idx: number, value: number) {
            this.idx = idx;
            this.value = value;
            this.xOffset = canvasW / 2 + (idx - 1) * len * 3;
            this.generateLines();
          }

          generateLines() {
            this.lines = [];
            const mX = maskX[this.value];
            const mY = maskY[this.value];

            for (let row = 0; row < 5; row++) {
              const y = canvasH / 2 - len * 2 + len * row;
              const start = p.createVector(this.xOffset + len, y);
              const end = p.createVector(this.xOffset - len, y);
              const evenBit = row * 2;
              const oddBit = evenBit + 1;
              if ((mX & (1 << evenBit)) !== 0) {
                this.lines.push(new Line(this.idx * 100 + row, start, end, 2));
              } else if ((mX & (1 << oddBit)) !== 0) {
                const mid = p.createVector((start.x + end.x) / 2, y);
                this.lines.push(new Line(this.idx * 100 + row, mid, end, 2));
              }
            }

            for (let b = 0; b <= 14; b++) {
              const col = b % 3;
              const row = Math.floor(b / 3);
              let x: number | null = null;
              if (col === 0 && row < 4) x = this.xOffset - len;
              else if (col === 1 && row < 4) x = this.xOffset;
              else if (col === 2 && row < 5) x = this.xOffset + len;
              else continue;
              const y0 = canvasH / 2 - len * 2 + len * row;
              const y1 = y0 + len;
              if ((mY & (1 << b)) !== 0) {
                const id = this.idx * 100 + 10 + b;
                this.lines.push(new Line(id, p.createVector(x, y0), p.createVector(x, y1), 2));
              }
            }
          }

          transitionTo(next: number) {
            if (this.value === next) return;
            this.lines.forEach((l) => {
              l.state = 0;
              if (p.random(1) < 0.5) l.swap();
            });
            this.value = next;
            const nextDigit = new Digit(this.idx, next);
            nextDigit.lines.forEach((l) => {
              const ex = this.lines.find((old) => old.id === l.id);
              if (ex) {
                ex.state = 1;
                ex.progress = 1;
              } else {
                this.lines.push(l);
              }
            });
          }

          update() {
            for (let i = this.lines.length - 1; i >= 0; i--) {
              const l = this.lines[i];
              l.update();
              if (l.state === 0 && l.progress === 0) this.lines.splice(i, 1);
            }
          }

          draw() {
            this.lines.forEach((l) => l.draw());
          }
        }

        const step = () => {
          const num = (currentNum + 1) % 1000;
          const nextDigits = [Math.floor(num / 100), Math.floor((num % 100) / 10), num % 10];
          digits.forEach((d, i) => d.transitionTo(nextDigits[i]));
          currentNum = num;
        };

        p.setup = () => {
          canvasW = wrap.current!.offsetWidth;
          canvasH = wrap.current!.offsetHeight;
          len = Math.min(canvasW, canvasH) / 10;
          p.createCanvas(canvasW, canvasH);
          p.strokeWeight(5);
          digits.push(new Digit(0, 0), new Digit(1, 0), new Digit(2, 0));
          timer = p.millis();
        };

        p.draw = () => {
          p.background(255);
          digits.forEach((d) => {
            d.update();
            d.draw();
          });
          if (p.millis() - timer > delay) {
            step();
            timer = p.millis();
          }
        };

        p.windowResized = () => {
          canvasW = wrap.current!.offsetWidth;
          canvasH = wrap.current!.offsetHeight;
          p.resizeCanvas(canvasW, canvasH);
        };
      };

      if (!cancelled) p5Ref.current = new P5(sketch, wrap.current!);
    })();

    return () => {
      cancelled = true;
      p5Ref.current?.remove();
      p5Ref.current = null;
      if (wrap.current) while (wrap.current.firstChild) wrap.current.firstChild.remove();
    };
  }, [delay]);

  return <div ref={wrap} className="w-full h-full" />;
}
