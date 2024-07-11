import React, { useCallback, useEffect, useState } from "react";
import { InventoryEntity, ProductEntity } from "../../interfaces";
import { handleError } from "../../helpers";
import { apiGetAllProducts } from "../../api/apiGetAllProducts";
import { apiGetInventoryList } from "../../api/apiGetInventoryList";
import { apiDeleteInventoryList } from "../../api/apiDeleteInventoryList";
import { apiCreateInventoryList } from "../../api/apiCreateInventoryList";
import InventoryHeader from "./header";
import InventoryList from "./main";
import InventoryFooter from "./footer";
import { SuccessToast } from "../../components/toast/SuccessToast";
import { localization } from "../../localization";
import "./styles.css";

const defaultInventory: InventoryEntity = {
    name: "",
    quantity: 1,
};

const Inventory = (): JSX.Element => {
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [inventoryToAdd, setInventoryToAdd] = useState<InventoryEntity>(defaultInventory);
    const [inventories, setInventories] = useState<InventoryEntity[]>([]);

    const handleSelect = useCallback(({ name }: ProductEntity) => {
        setInventoryToAdd(prev => ({ ...prev, name }));
    }, []);

    const handleChangeQuantity = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>
        setInventoryToAdd(prev => ({ ...prev, quantity: Number(event.target.value) })), []);

    const resetFields = useCallback(() => {
        setInventoryToAdd(defaultInventory);
    }, []);

    const onAddInventory = useCallback(() => {
        const existingInventoryIndex = inventories.findIndex((item) => item.name === inventoryToAdd.name);

        if (existingInventoryIndex !== -1) {
            const updatedInventories = [...inventories];
            updatedInventories[existingInventoryIndex] = {
                ...updatedInventories[existingInventoryIndex],
                quantity: updatedInventories[existingInventoryIndex].quantity + inventoryToAdd.quantity,
            };
            setInventories(updatedInventories);
        } else {
            setInventories((prev) => [...prev, inventoryToAdd]);
        }
        resetFields();
    }, [inventoryToAdd, resetFields, inventories]);

    const onDeleteInventoryItem = useCallback((index: number) => {
        setInventories(prev => prev.filter((_, i) => i !== index));
    }, []);

    const getInventoryList = useCallback(async () => {
        const response = await apiGetInventoryList();
        if (response.length) {
            setInventories(response);
        }
    }, []);

    const onDeleteInventory = useCallback(async () => {
        await apiDeleteInventoryList();
        resetFields();
        setInventories([]);
        SuccessToast(localization.successMessage)
    }, [resetFields]);

    const onSaveInventoryList = useCallback(async () => {
        await apiCreateInventoryList(inventories);
        SuccessToast(localization.successMessage)
        resetFields();
    }, [inventories, resetFields]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                const [response] = await Promise.all([apiGetAllProducts(), getInventoryList()]);
                setProducts(response);
            } catch (error) {
                handleError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [getInventoryList]);

    return (
        <div>
            <InventoryHeader
                isLoading={isLoading}
                products={products}
                inventoryToAdd={inventoryToAdd}
                selectProduct={handleSelect}
                changeProductQuantity={handleChangeQuantity}
                addInventory={onAddInventory}
            />
            <InventoryList
                items={inventories}
                onDelete={onDeleteInventoryItem}
            />
            <InventoryFooter
                onSaveInventoryList={onSaveInventoryList}
                onDeleteInventory={onDeleteInventory}
                disabled={!inventories.length || isLoading}
            />
        </div>
    );
};

export default Inventory;