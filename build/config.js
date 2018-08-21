const path = require('path')
const root = path.resolve(__dirname, '..')

const vdist = 'v-dist'
const vsrc = 'v-src'
const slash = '/'
const current = './'

const d_root = path.resolve(root, vdist)
const s_root = path.resolve(root, vsrc)

module.exports = {
  //路径
  route: {
    dist: d_root,
    src: s_root,
    publicPath:  process.env.NODE_ENV === 'production' ? slash + vdist + slash : slash ,
    app: s_root + '/main.js',
    components: s_root + '/components',
    html: s_root + '/index.html',
    clientapp: s_root + '/entry-client.js',
    serverapp: s_root + '/entry-server.js',
    ssrPath: slash + vdist + slash,
    ssrdex: slash + vdist,
    ssrdexs: current + vdist
  },
  //图标
  icon: {
    src: s_root + '/static/img/logo.png',
    pwaicon1: 'static/pwa/icons/android-chrome-192x192.png',
    pwaicon2: 'static/pwa/icons/android-chrome-512x512.png'
  },
  //文件
  file: {
    urlLoaderName: 'static/assets/[name].[hash:7].[ext]',
    miniCssName: 'static/css/index.[chunkhash].css',
    outputJsName: 'static/js/[name].[chunkhash].js',
    devJsName: 'static/js/app.js',
    manifestName: 'static/pwa/manifest.json',
  },
  //插件
  plugin: {
    purgecss: [
      s_root + '/index.html',
      s_root + '/**/*.vue',
      s_root + '/**/*.js'
    ],
    copy: {
      from: s_root + '/static/pwa',
      to: 'static/pwa'
    }
  },
}
