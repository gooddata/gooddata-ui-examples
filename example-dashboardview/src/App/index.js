// (C) 2020 GoodData Corporation
import React from "react";
import * as Md from "../md";
import Hint from "./Hint";
import { DashboardView } from "@gooddata/sdk-ui-ext";

// Try editing lines below 👇
const dashboard = "aaAxaLgZdXxf";
//const dashboard = Md.Dashboards._2ProductDetails;

export default () => (
  <>
    <h1>Embedding using &lt;DashboardView /&gt;</h1>

    <div class="dashboard">
      <DashboardView dashboard={dashboard} />
    </div>

    <hr />

    <Hint />
  </>
);
