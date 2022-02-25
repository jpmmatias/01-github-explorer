const path = require('path');
const HtmlPLugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
	},
	devServer: {
		static: path.join(__dirname, 'public'),
		hot: true,
	},
	plugins: [
		new HtmlPLugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(j|t)sx$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
