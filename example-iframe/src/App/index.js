// (C) 2020 GoodData Corporation
import React, {useState } from "react";
import Hint from "./Hint";

export default () => {
  const [url, setUrl] = useState('https://support-na3.na.gooddata.com/dashboards/embedded/#/workspace/psk46untnn2vhzs5bokdav3bu2puf6s6/dashboard/aaAxaLgZdXxf');

  return (
    <>
      <h1>Emedding using iframe</h1>

      <label>dashboard URL: <input type="text" defaultValue={url} onChange={e => setUrl(e.target.value)} /></label>

      <iframe src={url}></iframe>

      <Hint url={url} setUrl={setUrl} />
    </>
  );
};
