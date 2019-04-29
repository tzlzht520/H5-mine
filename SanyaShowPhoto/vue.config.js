module.exports = {
  chainWebpack: config => {
    config.devServer
      .disableHostCheck(true)
  }
}
