// (C) 2021 GoodData Corporation
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
      <DashboardView
        dashboard={dashboard}
        config={{
          // You will need your Mapbox token to display geocharts correctly
          // https://docs.mapbox.com/help/getting-started/access-tokens/
          // mapboxToken: ''
        }}
      />
    </div>

    <hr />

    <Hint />
  </>
);
