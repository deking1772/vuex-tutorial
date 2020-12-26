module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
            @import "@/assets/style/_mixins.scss";
            @import "@/assets/style/_variables.scss";
          `
        }
      },
      sourceMap: true
    }
  }