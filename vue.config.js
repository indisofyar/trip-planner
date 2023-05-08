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
});
