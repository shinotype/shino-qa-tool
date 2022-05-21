const path = require('path');

module.exports = {
  entry: './src/qatool.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'qatool.js',
    library: 'qatool',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};