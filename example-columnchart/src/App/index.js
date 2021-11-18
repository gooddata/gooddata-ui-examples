// (C) 2021 GoodData Corporation
import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
//import { BarChart } from "@gooddata/sdk-ui-charts";
import { modifyMeasure } from "@gooddata/sdk-model";
import * as Md from "../md";
import Hint from "./Hint";

export default () => (
  <>
    <h1>Budget Across Campaign Categories</h1>

    {/* Try editing the component below 👇 */}
    <div style={{ height: 300 }}>
      <ColumnChart
        measures={[modifyMeasure(Md.Budget.Sum, m => m.title('Budget'))]}
        viewBy={Md.CampaignCategory}
        //stackBy={Md.CampaignType}
      />
    </div>

    <Hint />
  </>
);
