module.exports = {
  chainWebpack: config => {
    config.devServer
      .disableHostCheck(true)
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/activity/' : '/'
}
