// (C) 2021 GoodData Corporation
import React, { useState } from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { DateGranularity, newRelativeDateFilter } from "@gooddata/sdk-model";
import { defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import * as Md from "../md";
import Hint from "./Hint";
import DateFilter from "./DateFilter";

export default () => {
  const [filter, setFilter] = useState({
    selectedFilterOption:
      defaultDateFilterOptions.relativePreset[DateGranularity.month][1],
    excludeCurrentPeriod: false
  });
  const { selectedFilterOption } = filter;

  const filters =
    selectedFilterOption.type === "allTime"
      ? []
      : [
          newRelativeDateFilter(
            Md.DateDatasets.OrderDate,
            selectedFilterOption.granularity,
            selectedFilterOption.from,
            selectedFilterOption.to
          )
        ];

  return (
    <>
      <h1>Date Filter Component</h1>

      <div style={{ margin: 10 }}>
        <DateFilter filter={filter} setFilter={setFilter} />
      </div>

      <div style={{ height: 300 }}>
        <ComboChart
          primaryMeasures={[Md.Revenue]}
          secondaryMeasures={[Md.NrOfOrders]}
          viewBy={[Md.DateDatasets.OrderDate.Date.Long]}
          filters={filters}
        />
      </div>

      <Hint />
    </>
  );
};
