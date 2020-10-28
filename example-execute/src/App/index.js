// (C) 2020 GoodData Corporation
import React from "react";
import * as Ldm from "../ldm";
import Hint from "./Hint";
import { Execute } from "@gooddata/sdk-ui";
import CustomVisualization from "./CustomVisualization";

export default () => (
  <>
    <h1>Custom Visualization</h1>

    <div style={{ height: 400 }}>
      <Execute seriesBy={[Ldm.Revenue]} slicesBy={[Ldm.ProductCategory, Ldm.CustomerRegion]}>
        {CustomVisualization}
      </Execute>
    </div>

    <Hint />
  </>
);
