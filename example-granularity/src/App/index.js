import React, { useState } from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { newRelativeDateFilter } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";
import RadioButtons from "./RadioButtons";

const DATASET = "date.dataset.dt";

export default () => {
  // Try changing default granularity to Ldm.DateQuarterYear 👇
  const [granularity, setGranularity] = useState(Ldm.DateMonthYear.Long);

  return (
    <>
      <h1>Revenue and # of Orders</h1>
      <h2>Weekly, Monthly, and Quarterly</h2>

      <RadioButtons granularity={granularity} setGranularity={setGranularity} />

      <div style={{ height: 300 }}>
        <ComboChart
          primaryMeasures={[Ldm.Revenue]}
          secondaryMeasures={[Ldm.NrOfOrders]}
          viewBy={[granularity]}
          filters={[newRelativeDateFilter(DATASET, "GDC.time.month", -11, 0)]}
          config={{ legend: { enabled: false } }}
        />
      </div>

      <Hint />
    </>
  );
};
