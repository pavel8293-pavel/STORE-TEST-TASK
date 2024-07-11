import React, { useState } from "react";
import { apiUpdateProducts } from "../../api/apiUpdateProducts";
import { handleError } from "../../helpers";
import { localization } from "../../localization";
import { SuccessToast } from "../../components/toast/SuccessToast";
import Button from "../../components/button";
import Input from "../../components/inputs/Input";
import "./styles.css"

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct(event.target.value);
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      await apiUpdateProducts({ name: newProduct });
      setNewProduct("");
      SuccessToast(localization.successMessage)
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-product">
      <Input
        value={newProduct}
        onChange={handleChange}
        placeholder={localization.newProductPlaceholder}
      />
      <Button
        onClick={handleSave}
        disabled={isLoading}
        label={localization.saveButton}
      />
    </div>
  );
};

export default NewProduct;
