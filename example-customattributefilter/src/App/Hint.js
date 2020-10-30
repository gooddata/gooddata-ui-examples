// (C) 2020 GoodData Corporation
import React from "react";

export default () => (
  <>
    <div>
      <span aria-label="Look!" role="img">
        👉
      </span>{" "}
      Custom implementation of the Attribute Filter using{" "}
      <a
        href="https://react-select.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        react-select
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
