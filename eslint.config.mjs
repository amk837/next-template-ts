/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [{
  ignores: ['**/.next', '**/.vscode', '**/node_modules'],
}, ...compat.extends('next/core-web-vitals', 'eslint-config-next', 'airbnb'), {
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.ts', '.tsx'],
    }],

    'max-len': ['error', {
      code: 160,
    }],

    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 'warn',

    'no-param-reassign': ['error', {
      props: false,
    }],

    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'no-absolute-path': 'off',
  },
}];
