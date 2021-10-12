// (C) 2020 GoodData Corporation
import React from "react";

export default () => (
  <>
    <div>
      <span aria-label="Look!" role="img">
        👉
      </span>{" "}
      This chart has been built using the{" "}
      <pre>
        <a
          href="https://sdk.gooddata.com/gooddata-ui/docs/create_new_visualization.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Execute
        </a>
      </pre>{" "}
      component and{" "}
      <a
        href="https://www.highcharts.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Highcharts
      </a>{" "}
      library
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
