
module.exports = {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        // other rules...
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };