export interface GetProductListRequestInterface {
  payload?: GetProductListPayloadRequestInterface;
}

export interface GetProductListPayloadRequestInterface {
  params: GetProductListParamsRequestInterface;
}

export type GetProductListParamsRequestInterface = {
  limit?: number;
  sort?: string;
};

export interface GetProductListSuccessResponseInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface GetProductListErrorResponseInterface {
  status: number;
  message: string;
  name: string;
}
