// (C) 2020 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import * as Md from "../md";
import Hint from "./Hint";

export default () => (
  <>
    <h1>How Revenue Ties to # of Orders</h1>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <ComboChart
        primaryMeasures={[Md.Revenue]}
        //secondaryMeasures={[Md.NrOfOrders]}
        viewBy={[Md.DateDatasets.OrderDate.MonthYear.Long]}
      />
    </div>

    <Hint />
  </>
);
