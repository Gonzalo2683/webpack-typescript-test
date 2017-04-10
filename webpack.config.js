let path = require('path');

let srcPath = path.resolve(__dirname, './src/main.ts' )
let distPath = path.resolve(__dirname, './dist/' )

module.exports = {
    entry: srcPath,
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js"] 
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4465,
        inline: true
    },
    devtool: 'source-map'

};