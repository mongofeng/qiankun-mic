/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/v2': {
      // target: 'http://localhost:8110/',
      target: 'http://yangjin-art.top',
      // pathRewrite: {
      //     "^/v2": "/"
      // }
    },
    '/api-edu': {
      // target: 'http://localhost:8110/',
      target: 'http://yangjin-art.top',
      // pathRewrite: {
      //     "^/v2": "/"
      // }
    }
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
