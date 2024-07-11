import { httpPost } from "./apiHandlers";

const RESET_INVENTORY_LIST_URI = "/inventory/reset";

export const apiDeleteInventoryList = async (): Promise<[]> => {
    const result = await httpPost<[], []>(RESET_INVENTORY_LIST_URI);
    return result.data;
};