// eslint.config.js  （プロジェクトルート）
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  /* Next.js 推奨ルール */
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  /* Sketch コンポーネントだけルールを緩める */
  {
    files: ['components/*Sketch.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'prefer-const': 'off',
    },
  },
];
