const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/main17.ts'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main17.js'
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