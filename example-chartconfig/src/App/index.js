// (C) 2020 GoodData Corporation
import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import * as Md from "../md";
import Hint from "./Hint";

export default () => (
  <>
    <h1>Revenue Treemap</h1>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <Treemap
        measures={[Md.Revenue]}
        viewBy={Md.ProductCategory}
        segmentBy={Md.Product.Default}
        //config={{ legend: { position: "top" } }}
      />
    </div>

    <Hint />
  </>
);
