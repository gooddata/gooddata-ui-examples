// (C) 2021 GoodData Corporation
import React from "react";
import * as Md from "../md";
import Hint from "./Hint";
import { Execute } from "@gooddata/sdk-ui";
import CustomVisualization from "./CustomVisualization";

export default () => (
  <>
    <h1>Custom Visualization</h1>

    <div style={{ height: 400 }}>
      <Execute seriesBy={[Md.Revenue]} slicesBy={[Md.ProductCategory, Md.CustomerRegion]}>
        {CustomVisualization}
      </Execute>
    </div>

    <Hint />
  </>
);
