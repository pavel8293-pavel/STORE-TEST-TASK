import React, { useCallback } from "react";
import Button from "../../components/button";
import { localization } from "../../localization";

interface InventoryItemProps {
    name: string;
    quantity: number;
    index: number;
    onDelete: (index: number) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ name, index, quantity, onDelete }) => {
    const deleteItem = useCallback(() => onDelete(index), [index, onDelete])
    return (
        <li
            key={index}
            className="item"
        >
            {`${name} - ${quantity}`}
            <Button
                label={localization.deleteButton}
                onClick={deleteItem}
            />
        </li>
    );
};

export default InventoryItem;