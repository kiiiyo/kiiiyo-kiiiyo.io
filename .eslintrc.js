module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'prettier/@typescript-eslint', // Prettier plugin
    'plugin:prettier/recommended', // Prettier recommended rules
    'plugin:tailwind/recommended', // Tailwind plugin
  ],
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Includes .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}
