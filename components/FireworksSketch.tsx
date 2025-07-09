// firework 8,9



// components/FireworksSketch.tsx
'use client';

import { useRef, useEffect } from 'react';

export type SketchProps = { size?: number };

export default function FireworksSketch({ size = 760 }: SketchProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  /** ★ ❶ 既にラッパーが存在すれば初手で掃除 */
  useEffect(() => {
    if (wrapperRef.current) {
      while (wrapperRef.current.firstChild) {
        wrapperRef.current.removeChild(wrapperRef.current.firstChild);
      }
    }
  }, []); // ← 初回だけ実行

  /** ★ ❷ p5 セットアップ */
  useEffect(() => {
    let isCancelled = false;

    const loadSketch = async () => {
      if (!wrapperRef.current || p5InstanceRef.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        /* ---------- ここから Processing → p5.js 変換コード ---------- */
        const NUM = 360;
        let fireworks: Firework[] = new Array(NUM);
        let originX: number, originY: number;
        let aliveCount = 0;
        let activeNum: number;

        p.setup = () => {
          p.createCanvas(size, size);
          p.noFill();
          p.noStroke();
          p.background(0);
          initFireworks();
        };

        p.draw = () => {
          // 背景を半透明で塗って残像を作る
          p.fill(0, 10);
          p.rect(0, 0, p.width, p.height);

          // 各火花の更新
          aliveCount = 0;
          for (let i = 0; i < activeNum; i++) {
            fireworks[i].time();
            fireworks[i].move();
            fireworks[i].display();
            if (p.floor(fireworks[i].alpha) === 0) aliveCount++;
          }

          // 全部消えたら新しい花火を再生成
          if (aliveCount === activeNum) initFireworks();
        };

        /* ---------- Firework クラス ---------- */
        class Firework {
          x: number;
          y: number;
          r: number;
          g: number;
          b: number;
          alpha: number;
          v: number;
          angle: number;
          t = 0;
          readonly DIAM = 2;

          constructor(
            xpos: number,
            ypos: number,
            R: number,
            G: number,
            B: number,
            strokeAlpha: number,
            velocity: number,
            ang: number
          ) {
            this.x = xpos;
            this.y = ypos;
            this.r = R;
            this.g = G;
            this.b = B;
            this.alpha = strokeAlpha;
            this.v = velocity;
            this.angle = ang;
          }

          time() {
            this.t += 0.1; // 重力用の疑似タイマー
          }

          move() {
            this.y += this.v * p.sin(p.radians(this.angle)) + 0.3 * this.t;
            this.x += this.v * p.cos(p.radians(this.angle));
          }

          display() {
            p.fill(this.r, this.g, this.b, this.alpha);
            p.ellipse(this.x, this.y, this.DIAM, this.DIAM);
            this.alpha -= 1; // フェードアウト
            if (this.alpha < 0) this.alpha = 0;
          }
        }

        /* ---------- 花火をまとめて作る ---------- */
        function initFireworks() {
          originX = p.random(300, 460);
          originY = p.random(300, 460);
          activeNum = p.floor(p.random(10, NUM));

          for (let i = 0; i < activeNum; i++) {
            fireworks[i] = new Firework(
              originX,
              originY,
              p.random(100, 150),
              p.random(110, 150),
              p.random(230, 255),
              p.random(100, 150),
              p.random(1, 7),
              p.random(0, 360)
            );
          }
        }
        /* ---------- ここまで ---------- */
      };

      if (!isCancelled) {
        p5InstanceRef.current = new p5(sketch, wrapperRef.current!);
      }
    };

    loadSketch();

    /** ★ ❸ 完全クリーンアップ */
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
  }, [size]);

  return <div ref={wrapperRef} />;
}