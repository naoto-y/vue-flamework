const htmlLoader = require('html-loader');

module.exports = {
    mode: "develop",
  
    // メインのJS
    entry: "./src/app/app.js",
    module: {
      loaders: [
        {
          test: /\.html$/, loader: 'html-loader',
        }
      ]
    },
    // 出力ファイル
    output: {
      filename: "app.js"
    },
  }