import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import strip from '@rollup/plugin-strip'
import css from 'rollup-plugin-css-only'
import babel from '@rollup/plugin-babel'
import linaria from 'linaria/rollup'

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [
		resolve(),
		linaria({
			// eslint-disable-next-line no-undef
			sourceMap: process.env.NODE_ENV !== 'production',
		}),
		css({
			output: 'styles.css',
		}),
		babel({ babelHelpers: 'bundled' }),
		typescript(),
		strip()
	]
}