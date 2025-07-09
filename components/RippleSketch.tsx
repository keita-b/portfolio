// components/RippleSketch.tsx
'use client';

import { useRef, useEffect } from 'react';

export type SketchProps = { size?: number };
export default function RippleSketch({ size = 760 }: SketchProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  // ❶ wrap を初期化
  useEffect(() => {
    if (wrapRef.current) {
      while (wrapRef.current.firstChild) {
        wrapRef.current.removeChild(wrapRef.current.firstChild);
      }
    }
  }, []);

  // ❷ p5 セットアップ
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!wrapRef.current || p5Ref.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        /* === ここから Processing → p5.js === */
        const NUM = 10;
        const ripples: Ripple[] = new Array(NUM);
        const alphaPrev: number[] = new Array(NUM);

        p.setup = () => {
          p.createCanvas(size, size);
          p.background(127);
          p.noFill();
          p.smooth();
          for (let i = 0; i < NUM; i++) {
            ripples[i] = new Ripple(
              p.random(-100, 900),
              p.random(-100, 900),
              p.random(100, 255),
              p.random(27, 32),
              p.random(25, 30)
            );
            alphaPrev[i] = ripples[i].strokeAlpha;
          }
        };

        p.draw = () => {
          // 背景
          p.fill(127);
          p.noStroke();
          p.rect(0, 0, p.width, p.height);

          // すべての波紋
          for (let i = 0; i < NUM; i++) {
            ripples[i].display1();
            ripples[i].display2();
            if (190 <= alphaPrev[i]) ripples[i].display3();
            ripples[i].spread();

            if (ripples[i].strokeAlpha < 0) {
              ripples[i] = new Ripple(
                p.random(-100, 900),
                p.random(-100, 900),
                p.random(100, 255),
                p.random(27, 32),
                p.random(25, 30)
              );
              alphaPrev[i] = ripples[i].strokeAlpha;
            }
          }
        };

        class Ripple {
          xCenter: number;
          yCenter: number;
          side = 0;
          strokeAlpha: number;
          interval1: number;
          interval2: number;
          readonly W = 1;

          constructor(
            xpos: number,
            ypos: number,
            sA: number,
            inter1: number,
            inter2: number
          ) {
            this.xCenter = xpos;
            this.yCenter = ypos;
            this.strokeAlpha = sA;
            this.interval1 = inter1;
            this.interval2 = inter2;
          }

          display1() {
            p.noFill();
            p.strokeWeight(this.W);
            p.stroke(197, this.strokeAlpha);
            p.ellipse(this.xCenter, this.yCenter, this.side, this.side);
            if (this.side >= 2) {
              p.stroke(57, this.strokeAlpha);
              p.ellipse(
                this.xCenter,
                this.yCenter,
                this.side - 2,
                this.side - 2
              );
            }
          }

          display2() {
            if (this.side < this.interval1) return;
            p.noFill();
            p.strokeWeight(this.W);
            p.stroke(197, this.strokeAlpha);
            p.ellipse(
              this.xCenter,
              this.yCenter,
              this.side - this.interval1,
              this.side - this.interval1
            );
            if (this.side >= 2) {
              p.stroke(57, this.strokeAlpha);
              p.ellipse(
                this.xCenter,
                this.yCenter,
                this.side - 2 - this.interval1,
                this.side - 2 - this.interval1
              );
            }
          }

          display3() {
            if (this.side < this.interval1 + this.interval2) return;
            p.stroke(197, this.strokeAlpha);
            p.ellipse(
              this.xCenter,
              this.yCenter,
              this.side - this.interval1 - this.interval2,
              this.side - this.interval1 - this.interval2
            );
            if (this.side >= 2) {
              p.stroke(57, this.strokeAlpha);
              p.ellipse(
                this.xCenter,
                this.yCenter,
                this.side - 2 - this.interval1 - this.interval2,
                this.side - 2 - this.interval1 - this.interval2
              );
            }
          }

          spread() {
            if (this.strokeAlpha > 0) {
              this.side += 1;
              this.strokeAlpha -= 1;
            } else {
              this.side = 0;
            }
          }
        }
        /* === ここまで === */
      };

      if (!cancelled) p5Ref.current = new p5(sketch, wrapRef.current!);
    };

    load();

    // ❸ cleanup
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
  }, [size]);

  return <div ref={wrapRef} />;
}
