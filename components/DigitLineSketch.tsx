// components/DigitLineSketch.tsx
'use client';

import { useRef, useEffect } from 'react';
import type p5 from 'p5';

export default function DigitLineSketch({
  size = 800,
  delay = 1000,
}: {
  size?: number;
  delay?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  /* ───── StrictMode & Fast-Refresh 用クリーンアップ ───── */
  useEffect(() => {
    if (wrap.current) while (wrap.current.firstChild) wrap.current.firstChild.remove();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!wrap.current || p5Ref.current) return;
      const P5 = (await import('p5')).default;

      const sketch = (p: p5) => {
        /* ───────── マスク定義 ───────── */
        const maskX = [
          0b1100000011, 0b0000000000, 0b1100110011, 0b1100110011, 0b0000110000,
          0b1100110011, 0b1100110011, 0b0000000011, 0b1100110011, 0b1100110011,
        ];
        const maskY = [
          0b101101101101, 0b010010010010, 0b001001100100, 0b100100100100,
          0b010010011011, 0b100100001001, 0b101101001001, 0b100100100101,
          0b101101101101, 0b100100101101,
        ];

        /* ───────── 変数 ───────── */
        let len: number;
        let currentNum = 0;
        let nextNum = 1;
        let timer = 0;

        const horiz: [p5.Vector, p5.Vector][] = new Array(5);   // 5 段だけ
        const vert: (undefined | [p5.Vector, p5.Vector])[] = new Array(15).fill(undefined);
        const lines: Line[] = [];

        /* ───────── Line クラス ───────── */
        class Line {
          id: number;
          start: p5.Vector;
          end: p5.Vector;
          progress: number;
          speed = 0.05;
          state: 0 | 1 | 2; // 0:縮む 1:表示 2:伸びる
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
            if (this.state === 0 && this.progress > 0) this.progress = Math.max(0, this.progress - this.speed);
            if (this.state === 2 && this.progress < 1) this.progress = Math.min(1, this.progress + this.speed);
          }
          draw() {
            if (this.progress === 0) return;
            const cur = this.start.copy().lerp(this.end, this.ease(this.progress));
            p.line(this.start.x, this.start.y, cur.x, cur.y);
          }
        }
        const getLine = (id: number) => lines.find((l) => l.id === id);

        /* ───────── initializeLines ───────── */
        const init = () => {
          len = size / 8;

          /* 水平 5 段（重複しないように 0-4 だけ作る） */
          for (let row = 0; row < 5; row++) {
            const y = size / 4 + len * row;
            const start = p.createVector(size / 2 + len, y); // 右端 → 左端
            const end = p.createVector(size / 2 - len, y);
            horiz[row] = [start, end];
          }

          /* 垂直 15 本（Processing と同じ穴あき配列） */
          for (let b = 0; b <= 14; b++) {
            const col = b % 3;
            const row = Math.floor(b / 3);
            let x: number | null = null;
            if (col === 0) {
              if (row >= 4) continue;
              x = size / 2 - len;
            } else if (col === 1) {
              if (row >= 4) continue;
              x = size / 2;
            } else {
              if (row >= 5) continue;
              x = size / 2 + len;
            }
            const y0 = size / 4 + len * row;
            const y1 = y0 + len;
            vert[b] = [p.createVector(x, y0), p.createVector(x, y1)];
          }
        };

        /* ───────── createLines ───────── */
        const createLines = (num: number) => {
          /* -- 水平 -- */
          const mX = maskX[num];
          for (let row = 0; row < 5; row++) {
            const evenBit = row * 2;     // 長線
            const oddBit = evenBit + 1;  // 短線（オーバーラップ）
            if (mX & (1 << evenBit)) {
              // 長線が立っていれば 1 本描画
              if (!getLine(row)) lines.push(new Line(row, ...horiz[row], 2));
            } else if (mX & (1 << oddBit)) {
              // 長線が無く短線だけ立っている場合は中央→左の短線
              const [longStart, longEnd] = horiz[row];
              const shortStart = p.createVector(size / 2, longStart.y);
              if (!getLine(row))
                lines.push(new Line(row, shortStart, longEnd, 2));
            }
          }

          /* -- 垂直 -- */
          const mY = maskY[num];
          for (let b = 0; b <= 14; b++) {
            if ((mY & (1 << b)) && vert[b]) {
              const id = 10 + b;
              if (!getLine(id)) lines.push(new Line(id, ...vert[b]!, 2));
            }
          }
        };

        /* ───────── transition ───────── */
        const transition = () => {
          lines.forEach((l) => {
            l.state = 0;
            if (p.random(1) < 0.5) l.swap();
          });

          /* 水平 */
          const nextX = maskX[nextNum];
          for (let row = 0; row < 5; row++) {
            const eBit = row * 2;
            const oBit = eBit + 1;
            const hasLong = !!(nextX & (1 << eBit));
            const hasShort = !!(nextX & (1 << oBit));

            const id = row;
            const ex = getLine(id);

            if (hasLong || hasShort) {
              if (ex) {
                ex.state = 1;
                ex.progress = 1;
              } else {
                const [longS, longE] = horiz[row];
                if (hasLong) {
                  lines.push(new Line(id, longS, longE, 2));
                } else {
                  const shortS = p.createVector(size / 2, longS.y);
                  lines.push(new Line(id, shortS, longE, 2));
                }
              }
            }
          }

          /* 垂直 */
          const nextY = maskY[nextNum];
          for (let b = 0; b <= 14; b++) {
            if ((nextY & (1 << b)) && vert[b]) {
              const id = 10 + b;
              const ex = getLine(id);
              if (ex) {
                ex.state = 1;
                ex.progress = 1;
              } else {
                lines.push(new Line(id, ...vert[b]!, 2));
              }
            }
          }

          currentNum = nextNum;
          nextNum = (nextNum + 1) % 10;
        };

        /* ───────── p5 lifecycle ───────── */
        p.setup = () => {
          p.createCanvas(size, size);
          p.strokeWeight(5);
          init();
          createLines(currentNum);
          timer = p.millis();
        };
        p.draw = () => {
          p.background(255);

          for (let i = lines.length - 1; i >= 0; i--) {
            const l = lines[i];
            l.update();
            if (l.state === 0 && l.progress === 0) lines.splice(i, 1);
          }
          lines.forEach((l) => l.draw());

          if (p.millis() - timer > delay) {
            transition();
            timer = p.millis();
          }
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
  }, [size, delay]);

  return <div ref={wrap} />;
}
