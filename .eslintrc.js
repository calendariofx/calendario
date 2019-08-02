module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'browser': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': {
            'extends': './tsconfig.json',
            'includes': [
                "src/**/*.ts",
                "test/**/*.ts"
            ]
        },
        'tsconfigRootDir': './'
    },
    'plugins': ['@typescript-eslint'],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'sort-keys': [
            'error',
            'asc'
        ]
    }
}