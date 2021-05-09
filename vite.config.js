export default {
  server: {
    proxy: {
      "^/binance-api": {
        target: "https://api.binance.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/binance-api/, ""),
      },
    },
  },
};
