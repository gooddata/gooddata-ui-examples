import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm";
import Hint from "./Hint";

export default () => (
  <>
    <h1>How Revenue Ties to # of Orders</h1>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <ComboChart
        primaryMeasures={[Ldm.Revenue]}
        //secondaryMeasures={[Ldm.NrOfOrders]}
        viewBy={[Ldm.DateMonthYear.Long]}
      />
    </div>

    <Hint />
  </>
);
