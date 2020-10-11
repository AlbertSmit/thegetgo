import path from 'path'
import { UserConfig } from 'vite'
import cleanup from 'rollup-plugin-cleanup'

const alias = {
	// eslint-disable-next-line no-undef
	'/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
	alias,
	plugins: [],
	rollupInputOptions: {
		plugins: [
			cleanup()
		]
	},
	rollupOutputOptions: {}
}

export default config