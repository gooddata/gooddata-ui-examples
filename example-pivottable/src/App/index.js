import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import * as Ldm from "../ldm";
import Hint from "./Hint";
//import { modifyMeasure } from "@gooddata/sdk-model";

// Try editing lines below 👇
const revenue = Ldm.Revenue;
//const revenue = modifyMeasure(Ldm.Revenue, (m) => m.alias("Custom Title"));

export default () => (
  <>
    <h1>All Products Revenue</h1>

    <div style={{ height: 550 }}>
      <PivotTable
        measures={[Ldm.PercentRevenueInCategory, revenue]}
        rows={[Ldm.ProductCategory, Ldm.Product]}
      />
    </div>

    <Hint />
  </>
);
