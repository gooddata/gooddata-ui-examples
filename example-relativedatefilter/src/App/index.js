// (C) 2021 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { DateGranularity, newRelativeDateFilter } from "@gooddata/sdk-model";
import * as Md from "../md";
import Hint from "./Hint";

export default () => (
  <>
    <h1>Revenue and # of Orders</h1>
    <h2>Last 3 months</h2>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <ComboChart
        primaryMeasures={[Md.Revenue]}
        secondaryMeasures={[Md.NrOfOrders]}
        viewBy={[Md.DateDatasets.OrderDate.MonthYear.Long]}
        filters={[newRelativeDateFilter(Md.DateDatasets.OrderDate, DateGranularity.month, -2, 0)]} // 👉 Try -5, 0
      />
    </div>

    <Hint />
  </>
);
