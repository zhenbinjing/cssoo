// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  parser: 'postcss-scss',
  "plugins": {
    "postcss-import": {},
    "postcss-px2rem": {remUnit: 100},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
