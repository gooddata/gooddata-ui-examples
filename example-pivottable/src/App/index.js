// (C) 2021 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import * as Md from "../md";
import Hint from "./Hint";
import { modifyMeasure } from "@gooddata/sdk-model";

// Try editing lines below 👇
const revenue = Md.Revenue;
//const revenue = modifyMeasure(Md.Revenue, (m) => m.alias("Custom Title"));

export default () => (
  <>
    <h1>All Products Revenue</h1>

    <div style={{ height: 550 }}>
      <PivotTable
        measures={[Md.PercentRevenueInCategory, revenue]}
        rows={[Md.ProductCategory, Md.Product.Default]}
      />
    </div>

    <Hint />
  </>
);
