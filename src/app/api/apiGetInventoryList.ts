import { InventoryEntity } from "../interfaces";
import { httpGet } from "./apiHandlers";

const INVENTORY_LIST_URI = "/inventory";

export const apiGetInventoryList = async (): Promise<InventoryEntity[]> => {
    const result = await httpGet<InventoryEntity[]>(INVENTORY_LIST_URI);
    return result.data;
};
