// (C) 2021 GoodData Corporation
import React from "react";

export default () => (
  <>
    <div>
      <span aria-label="Look!" role="img">
        👉
      </span>{" "}
      Use the <pre>modifyMeasure</pre> helper to rename column <pre>Revenue</pre> to{" "}
      <pre>Total Revenue</pre>
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
