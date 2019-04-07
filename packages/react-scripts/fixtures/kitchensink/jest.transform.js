const babelOptions = { presets: ['@cr4zyc4t/babel-preset-react-app'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
