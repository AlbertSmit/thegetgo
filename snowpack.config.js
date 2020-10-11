// eslint-disable-next-line no-undef
module.exports = {
	'mount': {
		'public': '/',
		'src': '/_dist_'
	},
	'plugins': [
		['@snowpack/plugin-babel'],
		['@snowpack/plugin-dotenv'],
		['@snowpack/plugin-webpack'],
		['@snowpack/plugin-typescript']
	]
}