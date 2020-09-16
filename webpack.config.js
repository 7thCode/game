const path = require('path');

module.exports = {
    entry: './src/main14.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main14.js'
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