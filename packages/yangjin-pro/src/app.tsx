import React from 'react';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

import { queryCurrent } from './services/user';
import defaultSettings from '../config/defaultSettings';

// api
export * from '@/utils/http'

/**
 * 获取用户信息比较慢的时候会展示一个 loading
 */
export const initialStateConfig = {
  loading: <PageLoading />,
};

// 获取用户的信息
export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: API.User;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const currentUser = await queryCurrent();
      return currentUser;
    } catch (error) {
      history.push('/user/login');
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser: currentUser?.data,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}



export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};




// 微前端的配置
export const qiankun = {
  // 应用加载之前
  async bootstrap(props:  any) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props:  any) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props:  any) {
    console.log('app1 unmount', props);
  },
};
