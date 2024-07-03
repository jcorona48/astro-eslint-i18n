module.exports = {
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'eslint-config-standard',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/no-custom-classname': 'warn',
        'tailwindcss/no-contradicting-classname': 'error',
        'no-console': 1,
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
        },
        {
            // Define the configuration for `<script>` tag.
            // Script in `<script>` is assigned a virtual file name with the `.js` extension.
            files: ['**/*.astro/*.js', '*.astro/*.js'],
            parserOptions: {
                sourceType: 'module',
            },
            rules: {
                'prettier/prettier': 'off',
            },
        },
    ],
};
