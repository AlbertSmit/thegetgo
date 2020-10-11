import path from 'path'
import { UserConfig } from 'vite'
import cleanup from 'rollup-plugin-cleanup'
import prettier from 'rollup-plugin-prettier'

const alias = {
	// eslint-disable-next-line no-undef
	'/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
	alias,
	plugins: [],
	rollupInputOptions: {
		plugins: [
			cleanup(),
			prettier({
				tabWidth: 2,
				singleQuote: true,
			})
		],
	},
	rollupOutputOptions: { 
		banner: '/* Not sure why you are reading this. */',
		footer: '/* That\'s all folks! */',
		entryFileNames: 'superfastbundle.[name].[hash].js'
	}
}

export default config