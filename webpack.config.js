const path = require('path');

module.exports = {
    entry: './src/main12.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'main12.js'
    },

    resolve: {
        extensions: ['.js']
    }

};