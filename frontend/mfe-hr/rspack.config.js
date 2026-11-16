const rspack = require('@rspack/core');
const { ModuleFederationPlugin } = rspack.container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3002,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: { syntax: 'ecmascript', jsx: true },
            transform: { react: { runtime: 'automatic' } },
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeHr',
      filename: 'remoteEntry.js',
      exposes: {
        './Mount': './src/Mount',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
    new rspack.HtmlRspackPlugin({
      template: './public/index.html',
    }),
  ],
};
