// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { DateGranularity, newRelativeDateFilter } from "@gooddata/sdk-model";
import * as Md from "../md";
import Hint from "./Hint";
import RadioButtons from "./RadioButtons";

export default () => {
  // Try changing default granularity to Md.DateDatasets.OrderDate.QuarterYear.USShort 👇
  const [granularity, setGranularity] = useState(Md.DateDatasets.OrderDate.MonthYear.Long);

  return (
    <>
      <h1>Revenue and # of Orders</h1>
      <h2>Weekly, Monthly, and Quarterly</h2>

      <RadioButtons granularity={granularity} setGranularity={setGranularity} />

      <div style={{ height: 300 }}>
        <ComboChart
          primaryMeasures={[Md.Revenue]}
          secondaryMeasures={[Md.NrOfOrders]}
          viewBy={[granularity]}
          filters={[newRelativeDateFilter(Md.DateDatasets.OrderDate, DateGranularity.month, -11, 0)]}
          config={{ legend: { enabled: false } }}
        />
      </div>

      <Hint />
    </>
  );
};
