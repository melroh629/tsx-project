module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: [
		'react',
	],
	"rules": {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		  ],
		"quotes": ["error", "single"],
		"no-duplicate-imports": "error",
		"no-console": ["warn", { "allow": ["warn", "error", "info"] }],
		"no-unused-vars": "error",
		"no-multiple-empty-lines": "error"
	  },
};
