import { request } from 'umi';
import type { TableListParams } from './data.d';

// https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#%E4%B8%AD%E9%97%B4%E4%BB%B6

export async function getLongSortUrlList() {
  return request(`/api-edu/edu/long-sort-url/all`);
}

export async function addLongSortUrl(params: any) {
  return request<any>('/api-edu/edu/long-sort-url', {
    method: 'POST',
    data: params,
  });
}


export async function delLongSortUrl(id: string | number) {
  return request<any>('/api-edu/edu/long-sort-url/' + id, {
    method: 'DELETE',
  });
}


export async function updateLongSortUrl(id: string | number, params: any) {
  return request<any>('/api-edu/edu/long-sort-url/' + id, {
    method: 'PUT',
    data: params,
  });
}


export async function getLongSortUrl(id: string | number) {
  return request<any>('/api-edu/edu/long-sort-url/' + id);
}



export async function queryPageList(params?: TableListParams) {
  return request('/api-edu/edu/long-sort-url/pageList', {
    method: 'POST',
    data: params,
  });
}

// export async function removeRule(params: { key: number[] }) {
//   return request('/api/rule', {
//     method: 'POST',
//     data: {
//       ...params,
//       method: 'delete',
//     },
//   });
// }

// export async function addRule(params: TableListItem) {
//   return request('/api/rule', {
//     method: 'POST',
//     data: {
//       ...params,
//       method: 'post',
//     },
//   });
// }

// export async function updateRule(params: TableListParams) {
//   return request('/api/rule', {
//     method: 'POST',
//     data: {
//       ...params,
//       method: 'update',
//     },
//   });
// }
