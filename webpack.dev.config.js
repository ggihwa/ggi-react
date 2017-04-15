var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'babel-polyfill',
		'./src/index.jsx'
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
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
					presets: ['react','es2015','stage-0'],
					cacheDirectory:true
				}
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modues/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	devtool: "cheap-eval-source-map",

	devServer: {
		hot: true,
		contentBase: './dist'
	}
}