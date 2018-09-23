const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname,'build');
const ENTRY_DIR = ['./src/app.jsx'];
const minimizer = [];

if(process.env.NODE_ENV === "development"){
    ENTRY_DIR.push('webpack-hot-middleware/client');
}else{
    minimizer.push(new UglifyJsPlugin({
        cache: true,
        parallel: true,
    }));
}

let webpackConfig = {
    entry: {
        app:ENTRY_DIR
    },
    output: {
        path:BUILD_DIR,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.ProvidePlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }

        ]
    },
    stats:{
        colors: true
    },
    optimization: {
        minimizer: minimizer
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.js','.jsx']
    }
}

module.exports = webpackConfig;