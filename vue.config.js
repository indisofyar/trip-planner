const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_global.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "sass-loader",
          ],
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("preload");
    config.plugin("html").tap((args) => {
      args[0].cache = true;
      return args;
    });
  },
});
