// lib/psychedelicWaveDotSketch.ts
const psychedelicWaveDotSketch = (
  p: any,
  parent: HTMLDivElement,
  imageUrl: string | null,
  mode: string,
  options: {
    numDirections?: number;
    spacing?: number;
    threshold?: number;
    step?: number;
  } = {}
) => {
  let img: any = null;
  let imgLoaded = false;

  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(800, 800).parent(parent);
    p.colorMode(p.HSB, 360, 100, 100, 255);
    p.strokeWeight(2);
    p.noFill();
    p.background(255);

    // ★ ここで画像ロード
    if (imageUrl) {
      console.log('[SETUP] loadImage:', imageUrl);
      img = p.loadImage(
        imageUrl,
        (pic: any) => {
          pic.loadPixels();
          imgLoaded = true;
          console.log('✅ image loaded:', pic.width, pic.height);
        },
        (err: any) => console.error('❌ loadImage error:', err)
      );
    }
  };

  p.draw = () => {
    console.log('[DRAW]', p.frameCount, 'imgLoaded=', imgLoaded);
    if (!imgLoaded) return;    // ロード待ち

  /* 以降はこれまで通りの点描ロジック … */

    p.clear();                               // ① 先にクリア
    p.background(255);

    if (!img.pixels?.length) return;         // ピクセル未展開なら抜ける

    const {
      numDirections = 4,
      spacing = 8,
      step = 1,
      threshold = 44,
    } = options;

    /* アニメーション用パラメータ */
    const freq  = 0.02 + 0.01 * Math.sin(p.frameCount * 0.01);
    const amp   = 15  + 10   * Math.sin(p.frameCount * 0.015);

    /* 元画像とキャンバスのアスペクト比調整 */
    const canvasRatio = p.width / p.height;
    const imgRatio    = img.width / img.height;
    let drawW = p.width, drawH = p.height;
    if (imgRatio > canvasRatio) drawH = p.width  / imgRatio;
    else                        drawW = p.height * imgRatio;
    const offX = (p.width  - drawW) / 2;
    const offY = (p.height - drawH) / 2;

    const maxDist = Math.sqrt(drawW ** 2 + drawH ** 2);

    /* 点描ループ */
    for (let dir = 0; dir < numDirections; dir++) {
      const angle = (Math.PI * 2 * dir) / numDirections;
      const cosA  = Math.cos(angle);
      const sinA  = Math.sin(angle);

      for (let base = -maxDist; base < maxDist; base += spacing) {
        for (let t = -maxDist; t < maxDist; t += step) {
          const x0 = t;
          const y0 = base + amp * Math.sin(freq * t);
          const x  = p.width / 2 + x0 * cosA - y0 * sinA;
          const y  = p.height / 2 + x0 * sinA + y0 * cosA;

          /* 描画範囲内か */
          if (x < offX || x >= offX + drawW || y < offY || y >= offY + drawH) continue;

          /* 元画像座標 → ピクセルブライトネス */
          const imgX = ((x - offX) * img.width  / drawW)  | 0;
          const imgY = ((y - offY) * img.height / drawH) | 0;
          const idx  = (imgY * img.width + imgX) * 4;
          const r = img.pixels[idx], g = img.pixels[idx + 1], b = img.pixels[idx + 2];
          const bright = p.brightness(p.color(r, g, b));

          if (bright > threshold) continue;   // 閾値より明るい → スキップ

          /* 色 & 描画 */
          const hueVal = (p.frameCount * 0.5 + (x + y) / (p.width + p.height) * 360) % 360;
          p.stroke(hueVal, 50, 50, 255);
          p.point(x, y);
        }
      }
    }
  };
};

export default psychedelicWaveDotSketch;
