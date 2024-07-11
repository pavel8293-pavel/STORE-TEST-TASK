import { ProductEntity } from "../interfaces";
import { httpGet } from "./apiHandlers";

const ALL_PRODUCTS_URI = "/product/all";

export const apiGetAllProducts = async (): Promise<ProductEntity[]> => {
    const result = await httpGet<ProductEntity[]>(ALL_PRODUCTS_URI);
    return result.data;
};
