import React from "react";
import { AttributeElements } from "@gooddata/sdk-ui-filters";
import {
  newPositiveAttributeFilter,
  attributeDisplayFormRef
} from "@gooddata/sdk-model";
import Select from "react-select";

export default ({ placeholder, attribute, filters, setFilters }) => {
  const onChangeFilter = (options) => {
    if (options && options.length) {
      setFilters([
        newPositiveAttributeFilter(
          attribute,
          options.map((option) => option.value)
        )
      ]);
    } else {
      setFilters([]);
    }
  };

  return (
    <AttributeElements
      displayForm={attributeDisplayFormRef(attribute)}
      options={{ limit: 100 }}
      children={({ validElements, isLoading }) => {
        const options = validElements
          ? validElements.items.map((item) => ({
              label: item.title,
              value: item.title
            }))
          : [];
        const selectedOptions = filters.length
          ? filters[0].positiveAttributeFilter.in.values
          : [];
        const value = options.filter((option) =>
          selectedOptions.find(
            (selectedOption) => selectedOption === option.value
          )
        );
        return (
          <Select
            isMulti
            onChange={onChangeFilter}
            options={options}
            value={value}
            isLoading={isLoading}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};
