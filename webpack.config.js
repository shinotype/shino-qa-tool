const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: {
    qatool: './src/ui.ts',
    db: './src/db.ts',
  },
  output: {
    clean: true,
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'qatool.html',
      template: 'src/qatool.html',
      chunks: ['qatool']
    }),
    new HtmlWebpackPlugin({
      filename: 'db.html',
      template: 'src/db.html',
      chunks: ['db']
    }),
  ],
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