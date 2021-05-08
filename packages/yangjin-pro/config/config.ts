// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV, PORT } = process.env;


export default defineConfig({
  hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  history: { type: 'hash' }, // 路由模式
  base: '/app-pro/', // 路由的的目录
  publicPath: process.env.NODE_ENV === 'production' ? '/yangjin-pro/' : `//localhost:${PORT}/`, // 打包目录
  antd: {},

  qiankun: {
    slave: {}
  },
  dva: {
    hmr: true,
  },
  layout: {
    name: '杨瑾美术',
    locale: false,
    siderWidth: 208,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // https://github.com/zthxxx/react-dev-inspector
  plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
  inspectorConfig: {
    // loader options type and docs see below
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  resolve: {
    includes: ['src/components'],
  },
});
