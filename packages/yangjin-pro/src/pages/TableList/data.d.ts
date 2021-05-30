export type TableListItem = {
  
    createTime: string;
    id: number
    isDeleted: number
    longUrl: string;
    name: string;
    updateTime: string;
    version: number;
  
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  query: any;
  size?: number;
  page?: number;
};
