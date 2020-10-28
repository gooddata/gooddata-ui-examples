// (C) 2020 GoodData Corporation
import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
// import { modifyMeasure } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";

// Try editing lines below 👇
const lastYear = Ldm.TotalQuarterRevenuePreviousYear;
// const lastYear = modifyMeasure(Ldm.TotalQuarterRevenuePreviousYear, (m) => m.alias("Last Year"));

export default () => (
  <>
    <h1>Revenue This Quarter</h1>

    {/* Try editing the component below 👇 */}
    <Headline
      primaryMeasure={Ldm.TotalRevenueThisQuarter}
      secondaryMeasure={lastYear}
    />

    <Hint />
  </>
);
