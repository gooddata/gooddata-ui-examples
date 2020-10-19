// (C) 2020 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { DateGranularity, newRelativeDateFilter } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";

const DATASET = "date.dataset.dt";

export default () => (
  <>
    <h1>Revenue and # of Orders</h1>
    <h2>Last 3 months</h2>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <ComboChart
        primaryMeasures={[Ldm.Revenue]}
        secondaryMeasures={[Ldm.NrOfOrders]}
        viewBy={[Ldm.DateMonthYear.Long]}
        filters={[newRelativeDateFilter(DATASET, DateGranularity.month, -2, 0)]} // 👉 Try -5, 0
      />
    </div>

    <Hint />
  </>
);
