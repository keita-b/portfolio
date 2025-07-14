/*
// lib/useP5.ts
let cachedP5: any = null;

export async function useP5() {
  if (cachedP5) return cachedP5;
  const mod = await import('p5');
  cachedP5 = mod.default;
  (cachedP5 as any).disableFriendlyErrors = true;
  (window as any).p5 = cachedP5;      // ★ グローバルにも置いておく
  return cachedP5;
}
*/

// lib/useP5.ts
let cached: any = null;

export async function useP5() {
  /*
    if (cached) return cached;          // 2 回目以降はキャッシュ
  const mod   = await import('p5');   // ★ 動的 import
  cached      = mod.default;
  (cached as any).disableFriendlyErrors = true;
  (window as any).p5 = cached;        // DevTools からも触れるよう global に
  return cached;
  */
}
