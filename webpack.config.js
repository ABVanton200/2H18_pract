const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
    library: '',
    libraryTarget: 'umd'
  },
  externals: {
    /* 'styled-components': 'styled-components', */
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules/styled-components')
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        }
      }
    ]
  },
  mode: 'development',
}
