const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer:{
    proxy:{
      '/api':{
        target:"http://localhost:3300"
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
       
      },
    },
  },
};
