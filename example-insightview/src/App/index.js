import React from "react";
//import * as Ldm from "../ldm";
import Hint from "./Hint";
import { InsightView } from "@gooddata/sdk-ui-ext";

// Try editing lines below 👇
const insight = "aaxwvA9xaYYu";
//const insight = Ldm.Insights.CustomersTrend;

export default () => (
  <>
    <h1>Insight Created in Analytical Designer</h1>

    <div style={{ height: 300 }}>
      <InsightView insight={insight} />
    </div>

    <Hint />
  </>
);
