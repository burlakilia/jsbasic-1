module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  devtool: 'eval-source-map',
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