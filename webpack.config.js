const path = require('path');

module.exports = {
    entry: './src/main15.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main15.js'
    },

    module: {
        rules: [
          { test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/" }
        ]
    },

    resolve: {
        extensions: ['.js', '.ts']
    }

};