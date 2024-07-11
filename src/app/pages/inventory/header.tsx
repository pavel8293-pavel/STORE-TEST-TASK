import React from "react";
import Select from "../../components/select";
import Input from "../../components/inputs/Input";
import { ProductEntity, InventoryEntity } from "../../interfaces";
import Button from "../../components/button";
import { localization } from "../../localization";

interface InventoryHeaderProps {
    products: ProductEntity[];
    selectProduct: (product: ProductEntity) => void;
    changeProductQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addInventory: () => void;
    inventoryToAdd: InventoryEntity;
    isLoading: boolean;
}

const InventoryHeader: React.FC<InventoryHeaderProps> = ({
    products,
    isLoading,
    inventoryToAdd,
    selectProduct,
    changeProductQuantity,
    addInventory,
}) => {
    const { name, quantity } = inventoryToAdd;
    const isAddButtonDisabled = !name || !quantity || isLoading
    return (
        <div className="header">
            <Select<ProductEntity>
                isLoading={isLoading}
                onSelect={selectProduct}
                selected={name}
                list={products}
                getItemName={(product) => product.name}
                placeholder={localization.selectProductPlaceholder}
            />
            <Input
                type="number"
                value={quantity}
                onChange={changeProductQuantity}
            />
            <Button
                label={localization.addButton}
                onClick={addInventory}
                disabled={isAddButtonDisabled}
            />
        </div>
    );
};

export default InventoryHeader;