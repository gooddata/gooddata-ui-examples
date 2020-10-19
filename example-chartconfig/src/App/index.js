// (C) 2020 GoodData Corporation
import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import * as Ldm from "../ldm";
import Hint from "./Hint";

export default () => (
  <>
    <h1>Revenue Treemap</h1>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <Treemap
        measures={[Ldm.Revenue]}
        viewBy={Ldm.ProductCategory}
        segmentBy={Ldm.Product}
        //config={{ legend: { position: "top" } }}
      />
    </div>

    <Hint />
  </>
);
