// (C) 2020 GoodData Corporation
import React from "react";

export default () => (
  <>
    <div>
      <span aria-label="Look!" role="img">
        👉
      </span>{" "}
      This dashboard was rendered using the &lt;DashboardView /&gt; component
    </div>
    <div>
      <span aria-label="Warning!" role="img">
        ⚠️
      </span>{" "}
      The &lt;DashboardView /&gt; component will be soon deprecated and replaced with &lt;Dashboard /&gt; component
    </div>
    <p>
      Powered by{" "}
      <a
        href="https://sdk.gooddata.com/gooddata-ui/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GoodData.UI
      </a>{" "}
      |{" "}
      <a
        href="https://sdk.gooddata.com/gooddata-ui/docs/next/interactive_examples.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Examples
      </a>
    </p>
  </>
);
