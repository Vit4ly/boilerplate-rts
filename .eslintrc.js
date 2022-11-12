import eslintRules from './tools/eslint/1-eslint'
import importRules from './tools/eslint/2-import'
import reactRules from './tools/eslint/3-react'
import reactJSXRules from './tools/eslint/4-react-jsx'
import lodashRules from './tools/eslint/5-lodash'
import typescriptRules from './tools/eslint/6-typescript'
import a11yRules from './tools/eslint/7-jsx-a11y'


module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:lodash/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        JSX: 'readonly',
        page: 'readonly',
        reporter: 'readonly',
        BUILD_VERSION: 'readonly',
        LATEST_COMMIT_HASH: 'readonly',
    },
    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            node: {extensions: ['.js', '.jsx', '.ts', '.tsx']}
        }
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'lodash',
        'testing-library',
        'jest-dom',
        'jsx-a11y'
    ],
    rules: {
        ...eslintRules,
        ...importRules,
        ...reactRules,
        ...reactJSXRules,
        ...lodashRules,
        ...typescriptRules,
        ...a11yRules
    },
};
