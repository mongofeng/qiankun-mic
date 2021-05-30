import { request } from 'umi';



export async function getLongSortUrlList() {
  return request(`/api-edu/edu/long-sort-url/all`);
}

export async function addLongSortUrl(params: any) {
  return request<any>('/api-edu/edu/long-sort-url', {
    method: 'POST',
    data: params,
  });
}


export async function delLongSortUrl(id: string) {
  return request<any>('/api-edu/edu/long-sort-url/' + id, {
    method: 'DELETE',
  });
}


export async function updateLongSortUrl(id: string) {
  return request<any>('/api-edu/edu/long-sort-url/' + id, {
    method: 'PUT',
  });
}


export async function getLongSortUrl(id: string) {
  return request<any>('/api-edu/edu/long-sort-url/' + id);
}
