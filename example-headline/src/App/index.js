// (C) 2021 GoodData Corporation
import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
//import { modifyMeasure } from "@gooddata/sdk-model";
import * as Md from "../md";
import Hint from "./Hint";

// Try editing lines below 👇
const lastYear = Md.TotalQuarterRevenuePreviousYear;
//const lastYear = modifyMeasure(Md.TotalQuarterRevenuePreviousYear, (m) => m.alias("Last Year"));

export default () => (
  <>
    <h1>Revenue This Quarter</h1>

    {/* Try editing the component below 👇 */}
    <Headline
      primaryMeasure={Md.TotalRevenueThisQuarter}
      secondaryMeasure={lastYear}
    />

    <Hint />
  </>
);
