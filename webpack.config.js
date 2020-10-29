var path = require('path');
 module.exports = {
     mode:"development",
     entry: path.join(__dirname, 'src', 'main.js'),
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'somefunnystuff.js'
     },
     module: {
        rules:[ 
                {
                    test: /\\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }

                }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };