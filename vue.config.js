const { defineConfig } = require('@vue/cli-service');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bbsale/' : '/',
};

module.exports = defineConfig({
  transpileDependencies: [
    'some-package',  // перечислите зависимости, которые должны быть транспилированы
  ],
  configureWebpack: {
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'vue'],
        exclude: 'node_modules',
      }),
    ],
  },
});