'use client';

import { useEffect, useRef } from 'react';

export default function ImageToLineSketch() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    if (wrapRef.current) {
      while (wrapRef.current.firstChild) wrapRef.current.removeChild(wrapRef.current.firstChild);
    }

    (async () => {
      const p5 = (await import('p5')).default;

      const imageUrl = '/imaikeita.jpg';

      const sketch = (p: any) => {
        let img: any;
        let brightnessMap: number[] = [];
        let drawW = 0, drawH = 0, offX = 0, offY = 0;
        let maxDist = 0;
        let ready = false;

        const numDirections = 1;
        const spacing = 6;
        const threshold = 44;
        const step = 2;

        p.preload = () => {
          img = p.loadImage(imageUrl);
        };

        const buildBrightnessMap = () => {
          const canvasRatio = p.width / p.height;
          const imgRatio = img.width / img.height;
          if (imgRatio > canvasRatio) {
            drawH = p.width / imgRatio;
            drawW = p.width;
          } else {
            drawW = p.height * imgRatio;
            drawH = p.height;
          }
          offX = (p.width - drawW) / 2;
          offY = (p.height - drawH) / 2;

          brightnessMap = [];
          img.loadPixels();
          for (let y = 0; y < p.height; y++) {
            for (let x = 0; x < p.width; x++) {
              let bright = 0;
              if (x >= offX && x < offX + drawW && y >= offY && y < offY + drawH) {
                const imgX = Math.floor((x - offX) * (img.width / drawW));
                const imgY = Math.floor((y - offY) * (img.height / drawH));
                const idx = (imgY * img.width + imgX) * 4;
                const r = img.pixels[idx];
                const g = img.pixels[idx + 1];
                const b = img.pixels[idx + 2];
                bright = p.brightness(p.color(r, g, b));
              }
              brightnessMap.push(bright);
            }
          }
          maxDist = Math.hypot(drawW, drawH);
        };

        p.setup = () => {
          p.createCanvas(p._userNode.offsetWidth, p._userNode.offsetHeight, p.P2D).parent(wrapRef.current);
          p.imageMode(p.CENTER);
          p.colorMode(p.HSB, 360, 100, 100, 100);
          p.strokeWeight(1.5);
          p.frameRate(30);
          buildBrightnessMap();
          ready = true;
        };

        p.windowResized = () => {
          ready = false;
          p.resizeCanvas(p._userNode.offsetWidth, p._userNode.offsetHeight);
          buildBrightnessMap();
          ready = true;
        };

        p.draw = () => {
          if (!ready || !img) return;

          p.background(0, 0, 100, 20);

          const t = p.millis() / 1000;
          const baseThreshold = threshold;

          // グラデーションの方向ベクトル（周期的に変化）
          const angle = p.TWO_PI * p.noise(t * 0.05);
          const gradVecX = Math.cos(angle);
          const gradVecY = Math.sin(angle);

          for (let dirIndex = 0; dirIndex < numDirections; dirIndex++) {
            const angle = (Math.PI * 2 * dirIndex) / numDirections;
            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);

            for (let base = -maxDist; base < maxDist; base += spacing) {
              
              /*
              const amp = p.map(p.noise(t * 0.1 + base * 0.01), 0, 1, 0, 50);
              const freq = p.map(p.noise(t * 0.1 + base * 0.02 + 100), 0, 1, 0.001, 0.05);
              */
              
              const amp  = p.map(p.sin(t * 0.7 + base * 0.01), -1, 1, 0, 20);
              const freq = p.map(p.sin(t * 0.3 + base * 0.005), -1, 1, 0.001, 0.05);
              

              const thresholdVariation = baseThreshold + 44 * p.sin(t * 0.8 + base * 0.01);
              //const thresholdVariation = 44;

              for (let i = -maxDist; i < maxDist; i += step) {

                const x0 = i;
                const y0 = base + amp * Math.sin(freq * i);

                const x = p.width / 2 + x0 * cosA - y0 * sinA;
                const y = p.height / 2 + x0 * sinA + y0 * cosA;

                const ix = Math.floor(x);
                const iy = Math.floor(y);
                if (ix < 0 || iy < 0 || ix >= p.width || iy >= p.height) continue;

                const bright = brightnessMap[iy * p.width + ix];
                if (bright <= thresholdVariation) {
                  const gradRatio = p.constrain((ix * gradVecX + iy * gradVecY) / (p.width + p.height), 0, 1);
                  const hue = (360 * gradRatio + t * 30) % 360;
                  p.stroke(hue, 80, 60, 80);
                  p.point(x, y);
                }
              }
            }
          }
        };
      };

      if (wrapRef.current) {
        p5Ref.current = new p5(sketch, wrapRef.current);
      }
    })();

    return () => {
      p5Ref.current?.remove();
      p5Ref.current = null;
    };
  }, []);

  return <div ref={wrapRef} className="w-full h-full" />;
}
