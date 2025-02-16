import axios, { AxiosError } from "axios";
import { ProductRestAPIURL } from "../../url";
import type { GetProductListPayloadRequestInterface } from "../../models/product";

export const fetchGetProductList = async (
  payload?: GetProductListPayloadRequestInterface
) => {
  try {
    const config = useRuntimeConfig();
    const url = `${
      config.public.apiBaseUrl
    }${ProductRestAPIURL.getProductList()}`;

    const res = await axios.get(url, {
      params: payload?.params,
    });
    return res.data;
  } catch (err) {
    throw (err as AxiosError)?.response?.data || (err as AxiosError)?.response;
  }
};
