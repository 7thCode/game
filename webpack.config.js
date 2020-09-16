const path = require('path');

module.exports = {
    entry: './src/main13.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main13.js'
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