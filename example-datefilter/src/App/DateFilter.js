// (C) 2021 GoodData Corporation
import React from "react";
import { DateFilter, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import { DateGranularity } from "@gooddata/sdk-model";

const availableGranularities = [
  DateGranularity.date,
  DateGranularity.month,
  DateGranularity.quarter,
  DateGranularity.year
];

export default ({ filter, setFilter }) => {
  const { excludeCurrentPeriod, selectedFilterOption } = filter;
  const onApply = (selectedFilterOption, excludeCurrentPeriod) => {
    setFilter({
      selectedFilterOption,
      excludeCurrentPeriod
    });
  };

  return (
    <div style={{ width: 300, margin: "auto" }}>
      <DateFilter
        excludeCurrentPeriod={excludeCurrentPeriod}
        selectedFilterOption={selectedFilterOption}
        filterOptions={defaultDateFilterOptions}
        availableGranularities={availableGranularities}
        customFilterName="Date Filter"
        dateFilterMode="active"
        onApply={onApply}
      />
    </div>
  );
};
