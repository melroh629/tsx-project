module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'xo',
		'xo-typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@tanstack/query/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'@tanstack/eslint-plugin-query',
		'react-refresh',
	],
	rules: {
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		"@typescript-eslint/consistent-type-definitions": "off",
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',
		'no-console': "off",
		'no-unused-vars': 'error',
		'no-multiple-empty-lines': 'error',
		'react/react-in-jsx-scope': 'off',
		"@typescript-eslint/consistent-type-definitions": "off"
	},
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}'],
			excludedFiles: '*.ts,*.tsx', // 추가된 줄
			env: {
				node: true,
			},
			parserOptions: {
				project: null,
				sourceType: 'script',
			},
		},
	],
};
