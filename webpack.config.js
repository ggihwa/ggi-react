var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3008',
		'webpack/hot/only-dev-server',
		'./app/index.js'
	],

	output:{
		filename: 'bundle.js',
		path:path.resolve(__dirname,'dist')
	},

	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true,
		contentBase: './app'
	}
}