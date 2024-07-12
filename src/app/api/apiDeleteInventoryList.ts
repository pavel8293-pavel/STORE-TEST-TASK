import { httpPost } from "./apiHandlers";

const RESET_INVENTORY_LIST_URI = "/inventory/reset";

type EmptyRequest = {};
type EmptyResponse = {};

export const apiDeleteInventoryList = async (): Promise<EmptyResponse> => {
    const result = await httpPost<EmptyResponse, EmptyRequest>(RESET_INVENTORY_LIST_URI);
    return result.data;
};