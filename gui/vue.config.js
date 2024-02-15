const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../frontend',
  devServer: {
    proxy:{
      '/': {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  }
})
