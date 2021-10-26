// (C) 2020 GoodData Corporation
import React from "react";

const SHOW_NAV = 'showNavigation';
const SHOW_NAV_REGEX = new RegExp(`${SHOW_NAV}=[true|false]*`, 'gm');

export default ({ url, setUrl }) => {
  const onChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      if (url.indexOf(SHOW_NAV) === -1) {
        setUrl(`${url}?${SHOW_NAV}=true`);
      } else {
        setUrl(url.replace(SHOW_NAV_REGEX, `${SHOW_NAV}=true`));
      }
    } else {
      setUrl(url.replace(SHOW_NAV_REGEX, `${SHOW_NAV}=false`));
    }
  }

  return (
    <>
      <div class="hint">
        <span aria-label="Look!" role="img">
          👉
        </span>{" "}
        Show navigation by checking this <label>checkbox <input type="checkbox" onChange={onChange} /></label>. Observe the <pre>dashboard URL</pre> input change.
      </div>
      <p>
        Powered by{" "}
        <a
          href="https://www.gooddata.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GoodData
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
};
