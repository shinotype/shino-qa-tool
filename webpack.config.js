const path = require('path');

module.exports = (env, argv) => ({
  entry: './src/ui.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'qatool.js',
    library: 'qatool',
  },
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
        use: (argv.mode == 'production')
                ? ['style-loader', 'css-loader']
                : ['css-loader'],
      },
    ],
  },
});
