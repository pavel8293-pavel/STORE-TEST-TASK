import React from "react";
import Button from "../../components/button";
import { localization } from "../../localization";

interface InventoryFooterProps {
    onSaveInventoryList: () => void;
    onDeleteInventory: () => void;
    disabled: boolean;
}

const InventoryFooter: React.FC<InventoryFooterProps> = ({ onSaveInventoryList, onDeleteInventory, disabled }) => {
    return (
        <div className="footer">
            <Button
                disabled={disabled}
                label={localization.saveButton}
                onClick={onSaveInventoryList}
            />
            <Button
                disabled={disabled}
                label={localization.resetButton}
                onClick={onDeleteInventory}
            />
        </div>
    );
};

export default InventoryFooter;
