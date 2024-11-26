type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type Headers = {
  ContentType?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
  Authorization?: string;
  [key: string]: any;
};

export type RequestOptions = {
  url: string;
  method: Method;
  headers?: Headers;
  body?: any;
};

export type Response = {
  status: number;
  data: any;
};

export interface ExternalRequestsContract {
  request(data: RequestOptions): Promise<Response>;
}
