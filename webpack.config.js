var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/reducers.jsx'
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':'"production"'
		})
	],

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modues/,
				loader: 'babel-loader',
				options:{
					presets: ['react'],
					cacheDirectory:true
				}
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx']
	}
}