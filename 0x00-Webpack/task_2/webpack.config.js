const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to 'production' for optimized output
  entry: './src/index.js', // Specify your entry point (e.g., './foo.js')
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory (e.g., 'dist')
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Use CSS loaders for .css files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/, // Optimize images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [], // Add any necessary plugins (e.g., HtmlWebpackPlugin)
};
