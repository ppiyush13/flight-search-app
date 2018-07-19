const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/dist/",
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: 'style.[name].css',
			options: { minimize: true }
		})
	]
};