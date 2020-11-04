// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { DateGranularity, newRelativeDateFilter } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";
import DateFilter from "./DateFilter";
import dateFilterOptions from "./dateFilterOptions";

export const DATASET = "date.dataset.dt";

export default () => {
  const [filter, setFilter] = useState({
    selectedFilterOption:
      dateFilterOptions.relativePreset[DateGranularity.month][1],
    excludeCurrentPeriod: false
  });
  const { selectedFilterOption } = filter;

  const filters =
    selectedFilterOption.type === "allTime"
      ? []
      : [
          newRelativeDateFilter(
            DATASET,
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
          primaryMeasures={[Ldm.Revenue]}
          secondaryMeasures={[Ldm.NrOfOrders]}
          viewBy={[Ldm.DateDate.Long]}
          filters={filters}
        />
      </div>

      <Hint />
    </>
  );
};
