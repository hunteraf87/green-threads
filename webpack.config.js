const path = require('path');

module.exports = {
    mode: 'production',
    entry: './example/example.js',
    output: {
        path: path.resolve(__dirname, 'example', 'build'),
        filename: 'example.js',
    }
}