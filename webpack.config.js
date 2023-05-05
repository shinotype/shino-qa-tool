const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: './src/ui.ts',
  output: {
    clean: true,
    path: path.join(__dirname, '/dist'),
    filename: 'qatool.js',
    library: 'qatool',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/qatool.html'
  })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
