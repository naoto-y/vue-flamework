const htmlLoader = require('html-loader');

module.exports = {
    mode: "develop",
  
    // メインのJS
    entry: "./src/app/app.js",
    // 出力ファイル
    output: {
      filename: "app.js"
    },
  }