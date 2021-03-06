const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        prices: path.resolve(__dirname, 'src/js/prices.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js')
        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            //Here are the loaders
            {
                // test: what kind of file will recognize
                // use: what loader will take care the file
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    // ['style-loader','css-loader']
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
        //Here are the plugins 
    ]
}