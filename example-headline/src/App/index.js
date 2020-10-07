import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm";
import Hint from "./Hint";

export default () => (
  <>
    <h1># of Orders vs Valid Orders</h1>

    {/* Try editing the component below 👇 */}
    <Headline
      primaryMeasure={Ldm.NrOfOrders}
      secondaryMeasure={Ldm.NrOfValidOrders}
    />

    <Hint />
  </>
);
