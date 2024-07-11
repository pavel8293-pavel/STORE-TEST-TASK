import { ProductEntity } from "../interfaces";
import { httpPut } from "./apiHandlers";

const UPDATE_PRODUCTS_URI = "/product";

export const apiUpdateProducts = async (product: ProductEntity): Promise<ProductEntity[]> => {
    const result = await httpPut<ProductEntity[], ProductEntity>(UPDATE_PRODUCTS_URI, product);
    return result.data;
};
