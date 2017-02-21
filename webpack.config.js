const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TSLintPlugin = require('tslint-webpack-plugin');

// extracters
const extractSCSS = new ExtractTextPlugin({
	// filename: path.resolve(__dirname, 'css/[name].css'),
	filename: 'css/[name].css',
	allChunks: true
})

module.exports = {
	context: path.resolve(__dirname, 'entry'),
	entry: {
		index: './index.ts',
		info: './info.ts'
	},
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/'
	},
	devtool: "inline-source-map",
	resolve: {
		alias: {
			SCSS: path.resolve(__dirname, 'scss'),
			PUG: path.resolve(__dirname, 'templates/includes'),
			IMG: path.resolve(__dirname, 'public/img'),
			VUEX: path.resolve(__dirname, 'store'),
			CLASSES: path.resolve(__dirname, 'entry/classes'),
			INTERFACES: path.resolve(__dirname, 'entry/interfaces'),
			'vue$': 'vue/dist/vue.common.js'
		},
		extensions: [ '.js', '.jsx', '.ts', '.tsx', '.scss', '.html', '.pug', '.png', '.jpg' ]
	},
	devServer: {
		contentBase: ['dist', 'templates', 'public'],
		port: 505
	},
	// performance: {
	// 	hints: false
	// },
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractSCSS.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: false
							}
						},
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.pug$/,
				// use: "pug-loader?pretty=\t!self=true"
				use: [
					{
						loader: 'pug-loader',
						options: {
							pretty: "\t"
						}
					}
				]
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'ignore-loader',
					}
				]
			}
		]
	},
	plugins: [
		extractSCSS,
		new CleanWebpackPlugin(['dist/*'], {
			verbose: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'js/commons.js'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'templates/index.pug'),
			filename: path.resolve(__dirname, 'dist/index.html'),
			chunks: ['commons', 'index'],
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'templates/info.pug'),
			filename: path.resolve(__dirname, 'dist/info.html'),
			chunks: ['commons', 'info'],
			inject: 'body'
		}),
		new TSLintPlugin({
			files: [
				path.resolve(__dirname, 'entry/**/*.ts'),
				path.resolve(__dirname, 'entry/**/*.tsx'),
				path.resolve(__dirname, 'templates/**/*.ts'),
				path.resolve(__dirname, 'templates/**/*.tsx')
			]
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
