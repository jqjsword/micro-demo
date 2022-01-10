module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },

    proxy: {
      "/api": {
        target: "http://www.bing.com",
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
