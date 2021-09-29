interface belongResponseBody<ResultT> {
  count: number;
  total_count: number;
  results: ResultT[];
}

interface belongResponseError {
  field: string;
  message: string;
  code: number;
}

export interface belongResponse<ResultT> {
  body: belongResponseBody<ResultT>;
  errors: Array<belongResponseError>;
  status_code: number;
}

export interface belongPagination {
  page?: number;
  page_size?: number;
}

export interface belongArgs<FilterT> {
  filters?: FilterT;
  pagination?: belongPagination;
}
