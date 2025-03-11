const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/w/api.php',
    createProxyMiddleware({
      target: 'https://es.wikipedia.org',
      changeOrigin: true,
    })
  );
};