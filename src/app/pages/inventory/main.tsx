import React, { memo, useMemo } from "react";
import { InventoryEntity } from "../../interfaces";
import InventoryItem from "./item";

interface InventoryListProps {
  items: InventoryEntity[];
  onDelete: (index: number) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ items, onDelete }) => {
  const renderedItems = useMemo(() => {
    return items.map((item, index) => (
      <InventoryItem {...item} onDelete={onDelete} index={index} key={index} />
    ));
  }, [items, onDelete]);

  return <ul className="list">{renderedItems}</ul>;
};

export default memo(InventoryList);