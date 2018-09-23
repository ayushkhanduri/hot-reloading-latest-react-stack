const app = require('express')();
const path = require('path');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

const webpackConfig= require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackMiddleWare(compiler,{
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'src','index.html'));
})

app.listen(3000,(err)=>{
    if(err)
        return err;
    console.log('listening to port 3000');
})