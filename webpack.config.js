const path = require('path');

module.exports = {
    entry: './src/main16.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main16.js'
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