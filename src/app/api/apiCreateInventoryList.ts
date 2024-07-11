import { InventoryEntity } from "../interfaces";
import { httpPost } from "./apiHandlers";

const INVENTORY_LIST_URI = "/inventory";

export const apiCreateInventoryList = async (items: InventoryEntity[]): Promise<InventoryEntity[]> => {
    const result = await httpPost<InventoryEntity[], InventoryEntity[]>(INVENTORY_LIST_URI, items);
    return result.data;
};
