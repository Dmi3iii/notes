var webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './client/main.js',
	output: {
		path: __dirname + '/public/build/',
		publicPath: 'build/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /public/],
				use:
					{ loader: 'babel-loader'
					}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.gif$/,
				loader: 'url-loader?limit=10000&mimetype=image/gif'
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?limit=10000&mimetype=image/jpg'
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=10000&mimetype=image/png'
			},
			{
				test: /\.svg/,
				loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
			},
			{
				test: /\.jsx$/,
				loaders: [
					'react-hot-loader-loader',
					'babel-loader'
				],
				exclude: [/node_modules/, /public/]
			}/*,
            {
                test: /\.json$/,
                loader: "json-loader"
            }*/
		]
	}
};
