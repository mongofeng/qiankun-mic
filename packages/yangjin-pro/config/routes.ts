
export default [
  {
    path: 'https://pro.ant.design/docs/getting-started-cn',
    icon: 'smile',
    name: "文档",
    routes: [
      {
        path: 'https://pro.ant.design/docs/getting-started-cn',
        name: '文档一',
        icon: 'smile',
        // target: '_blank', // 点击新窗口打开
      },
      {
        path: 'http://yangjin-art.top/platform/#/yangjin-min/auth/login',
        name: '文档一',
        icon: 'smile',
        // target: '_blank', // 点击新窗口打开
      },
      
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },

  {
    component: './404',
  },
];
