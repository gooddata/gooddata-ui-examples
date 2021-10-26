// (C) 2020 GoodData Corporation
import React, {useState } from "react";
import Hint from "./Hint";

export default () => {
  const [url, setUrl] = useState('https://demos.na.gooddata.com/dashboards/embedded/#/workspace/gf5ar7e02sth33atdbzpabhvbddaqva3/dashboard/aadPCE04gggj');

  return (
    <>
      <h1>Emedding using iframe</h1>

      <label>dashboard URL: <input type="text" value={url} readOnly /></label>

      <iframe src={url}></iframe>

      <Hint url={url} setUrl={setUrl} />
    </>
  );
};
