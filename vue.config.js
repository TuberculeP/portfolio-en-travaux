const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // going to be on a subdirectory, but needs router to work
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio-en-travaux/' : '/',
});
