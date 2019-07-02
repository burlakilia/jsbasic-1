module.exports = {
  entry: './blocks/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }]
  }
};