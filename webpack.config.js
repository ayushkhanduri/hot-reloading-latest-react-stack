const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname,'build');
const ENTRY_DIR = ['./src/app.tsx'];
const minimizer = [];

const plugins = [];

if(process.env.NODE_ENV === 'development'){
    ENTRY_DIR.push('webpack-hot-middleware/client');
    plugins.push(new webpack.HotModuleReplacementPlugin());
}else{
    minimizer.push(new UglifyJsPlugin({
        cache: true,
        parallel: true,
    }));

    plugins.push(new htmlPlugin(    
        {
            hash: true,
            template: './src/index.html',
        }
    ),
    new compressionPlugin(
        {
            algorithm: 'gzip'
        }
    )
    );
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
    plugins: plugins,
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
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],

                exclude: [
                    // /node_modules\/mutationobserver-shim/g,
                    /(node_modules|bower_components)/,
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader:'ts-loader'
                }
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                use: {
                    loader: "source-map-loader"
                },
                exclude: [
                    /node_modules\/mutationobserver-shim/g
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
        extensions: ['.js','.jsx','.json','.ts','.tsx']
    }
}

module.exports = webpackConfig;