const rspack = require('@rspack/core');
const { ModuleFederationPlugin } = rspack.container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
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
      name: 'host',
      // Each remote points at its own dev-server-hosted remoteEntry.js.
      // In production these URLs would come from a service registry /
      // environment config instead of being hardcoded.
      remotes: {
        mfeNews: 'mfeNews@http://localhost:3001/remoteEntry.js',
        mfeHr: 'mfeHr@http://localhost:3002/remoteEntry.js',
        mfeReports: 'mfeReports@http://localhost:3003/remoteEntry.js',
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
