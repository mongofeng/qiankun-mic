import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,

  colorWeak: false,
  title: '杨瑾美术',
  pwa: false,
  logo: 'http://yangjin-art.top/yangjin-pro/logo.jpg',
  iconfontUrl: '',
  "menu": {
    "locale": false
  },
  "headerHeight": 64,
  "splitMenus": false
    
  
};

export default Settings;
