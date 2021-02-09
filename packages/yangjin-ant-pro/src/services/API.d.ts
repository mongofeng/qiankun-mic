declare namespace API {
  export type CurrentUser = {
    data: { 
      account: string 
      name: string 
      mobile: string 
      userId: string  
    }
  };

  export type LoginStateType = {
    code: number;
    data: {
      token: string
    }
  };

  export type NoticeIconData = {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  };
}
