type WorkData = {
  title: string;
  period: string;
  sections: {
    heading: string;
    content: string;
    image?: string;
  }[];
};

export const workMap: Record<string, WorkData> = {
  'beatles-info': {
    title: 'The Beatles Info Graphic',
    period: '2023年5月〜7月',
    sections: [
      {
        heading: '課題説明',
        content: 'The Beatlesの音楽的変遷をインフォグラフィックで視覚化。複数のデータ（音楽性、リリース時期、歌詞など）を整理・分析し、時系列での変化を表現しました。',
      },
      {
        heading: 'ブラッシュアップ',
        content: 'フォントや配色を調整し、視認性と世界観の統一を図りました。特に後期作品のサイケデリック感を色彩で強調しています。',
      },
    ],
  },
  'spotify-app': {
    title: 'Audio Canvas',
    period: '2023年11月〜2024年1月',
    sections: [
      {
        heading: '制作背景',
        content: 'Spotifyのレコメンド機能によるフィルターバブルに疑問を持ち、より偶然性のある音楽発見体験を目指しました。自分自身がプレイリスト偏重になっていた経験が制作の動機です。',
      },
      {
        heading: '検索画面イメージ',
        content: 'ユーザーはキーワードで検索せずに、グラフィックを通じて気になる楽曲を視覚的に選ぶUIを採用しています。',
        image: '/images/spotify-app.png',
      },
    ],
  },
  'pixel-lab': {
    title: '卒業制作：Pixel Lab',
    period: '2024年12月〜2025年2月（予定）',
    sections: [
      {
        heading: '制作背景',
        content: 'p5.jsとNext.jsを組み合わせ、画像をレイヤー分割・加工・SVG出力できるWebアプリを構築中。手触り感あるアウトプットを目指し、プロッター印刷にも対応します。',
      },
      {
        heading: '展望',
        content: '今後は刺繍やプロッター、カッティングマシンによる物理出力を前提とした表現拡張を予定。アーティスト支援・ライブ会場連携なども想定しています。',
      },
      {
        heading: 'アプリイメージ',
        content: '実際の加工画面では、明度や色相に応じて線・点・形を自動生成する機能を持っています。',
        image: '/images/pixel-lab.png',
      },
    ],
  },
};
