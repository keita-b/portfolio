'use client';

import { useRef, useEffect } from 'react';

export default function FireworksSketch() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      while (wrapperRef.current.firstChild) {
        wrapperRef.current.removeChild(wrapperRef.current.firstChild);
      }
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadSketch = async () => {
      if (!wrapperRef.current || p5InstanceRef.current) return;
      const p5 = (await import('p5')).default;

      const sketch = (p: any) => {
        const MAX_FIREWORKS = 360;
        let fireworks: Firework[] = [];

        p.setup = () => {
          const w = wrapperRef.current!.offsetWidth;
          const h = wrapperRef.current!.offsetHeight;
          p.createCanvas(w, h);
          p.colorMode(p.HSB, 360, 100, 100, 255);
          p.noFill();
          p.noStroke();
          p.background(0);
        };

        p.windowResized = () => {
          const w = wrapperRef.current!.offsetWidth;
          const h = wrapperRef.current!.offsetHeight;
          p.resizeCanvas(w, h);
          p.background(0);
        };

        p.draw = () => {
          p.background(0);

          // ✅ 10% の確率で新しい花火を追加
          if (p.random(1) < 0.05 && fireworks.length < MAX_FIREWORKS) {
            addFirework();
          }

          // ✅ 各 firework を更新・描画
          for (let i = fireworks.length - 1; i >= 0; i--) {
            const fw = fireworks[i];
            fw.time();
            fw.move();
            fw.display();
            if (fw.alpha <= 0) {
              fireworks.splice(i, 1); // 消滅済みの花火を削除
            }
          }
        };

        class Firework {
          x: number;
          y: number;
          r: number;
          g: number;
          b: number;
          alpha: number;
          v: number;
          angle: number;
          diameter: number;
          t = 0;

          constructor(
            xpos: number,
            ypos: number,
            R: number,
            G: number,
            B: number,
            strokeAlpha: number,
            velocity: number,
            ang: number,
            diameter: number
          ) {
            this.x = xpos;
            this.y = ypos;
            this.r = R;
            this.g = G;
            this.b = B;
            this.alpha = strokeAlpha;
            this.v = velocity;
            this.angle = ang;
            this.diameter = diameter;

          }

          time() {
            this.t += 0.1;
          }

          move() {
            this.y += this.v * p.sin(p.radians(this.angle)) + 0.3 * this.t;
            this.x += this.v * p.cos(p.radians(this.angle));
          }

          display() {
            p.fill(this.r, this.g, this.b, this.alpha);
            p.ellipse(this.x, this.y, this.diameter, this.diameter);
            this.alpha -= 2;
            if (this.alpha < 0) this.alpha = 0;
          }
        }

      function addFirework() {
        const originX = p.random(p.width * 0.2, p.width * 0.8);
        const originY = p.random(p.height * 0.2, p.height * 0.8);
        const n = p.floor(p.random(10, 60));

        let baseHue: number;
        baseHue = p.random(0, 360);

        for (let i = 0; i < n; i++) {
          const hue = (baseHue + p.random(-10, 10)) % 360; // ±10度以内でばらけさせる
          const sat = p.random(80, 100);   // 彩度高め
          const bri = p.random(80, 100);   // 明度高め
          const alpha = p.random(180, 220);

          const col = p.color(hue, sat, bri, alpha);

          const distFromRed = Math.min(Math.abs(hue - 0), Math.abs(hue - 360));
          const diameter = p.map(distFromRed, 0, 180, 5, 2);


          const fw = new Firework(
            originX,
            originY,
            p.red(col),
            p.green(col),
            p.blue(col),
            p.alpha(col),
            p.random(1, 7),
            p.random(0, 360),
            diameter
          );
          fireworks.push(fw);
        }
      }


      };

      if (!isCancelled) {
        p5InstanceRef.current = new p5(sketch, wrapperRef.current!);
      }
    };

    loadSketch();

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
  }, []);

  return <div ref={wrapperRef} className="w-full h-full" />;
}
