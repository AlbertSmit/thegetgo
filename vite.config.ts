import path from 'path'
import { UserConfig } from 'vite'
import prettier from 'rollup-plugin-prettier'

const alias = {
	// eslint-disable-next-line no-undef
	'/~/': path.resolve(__dirname, 'src'),
}

const config: UserConfig = {
	alias,
	plugins: [],
	rollupInputOptions: {},
	rollupOutputOptions: { 
		banner: ((): string => '/* Not sure why you are reading this. */'),
		footer: ((): string =>'/* That\'s all folks! */'),
		entryFileNames: 'dev.[name].[hash].js',
	}
}

export default config