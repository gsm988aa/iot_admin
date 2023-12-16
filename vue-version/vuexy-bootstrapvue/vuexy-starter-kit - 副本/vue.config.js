const path = require('path')

module.exports = {
  devServer: {
    // disableHostCheck: true,
    allowedHosts: [
      'wuxixinyidai.com', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.wuxixinyidai.com', // .是二级域名的通配符
    ],
    // 更换端口号
    port: 8888,
    proxy: {

      '/gets': {
        target: 'http://192.168.10.166/gets', // 单片机 HTTP 服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/gets': '/gets',
        },
        headers: {
          'Access-Control-Allow-Origin': 'http://192.168.10.227:8888', // 设置允许的源请求地址
        },
      },

    },
  },

  publicPath: '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@themeConfig': path.resolve(__dirname, 'themeConfig.js'),
        '@core': path.resolve(__dirname, 'src/@core'),
        '@validations': path.resolve(__dirname, 'src/@core/utils/validations/validations.js'),
        '@axios': path.resolve(__dirname, 'src/libs/axios'),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // eslint-disable-next-line no-param-reassign
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        }
        return options
      })
  },
  transpileDependencies: ['vue-echarts', 'resize-detector'],
}
