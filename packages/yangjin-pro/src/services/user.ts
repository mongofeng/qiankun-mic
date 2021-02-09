import { request } from 'umi';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

// 获取用户的信息
export async function queryCurrent() {
  return request<API.CurrentUser>('/v2/user/userInfo');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
