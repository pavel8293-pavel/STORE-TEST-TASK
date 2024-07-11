import React, { useCallback, useMemo } from "react";
import "./styles.css";

interface SelectProps<T> {
  list: T[];
  onSelect: (item: T) => void;
  getItemName: (item: T) => string;
  isLoading: boolean;
  selected?: string;
  placeholder?: string;
}

const Select = <T,>({
  onSelect,
  selected,
  list,
  getItemName,
  placeholder,
  isLoading
}: SelectProps<T>) => {

  const options = useMemo(() => {
    return list.map((item) => {
      const optionLabel = getItemName(item);
      return (
        <option key={optionLabel} value={optionLabel}>
          {optionLabel}
        </option>
      );
    });
  }, [list, getItemName]);

  const handleProductChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const itemName = event.target.value;
      const selectedItem = list.find((item) => getItemName(item) === itemName);
      if (selectedItem) {
        onSelect(selectedItem);
      }
    },
    [list, getItemName, onSelect]
  );

  return (
    <div>
      <select
        className="select"
        value={selected || ""}
        disabled={isLoading}
        onChange={handleProductChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options}
      </select>
    </div>
  );
};

export default Select;