// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";
import * as Md from "../md";
import Hint from "./Hint";
import RadioButtons from "./RadioButtons";

export default () => {
  // Try changing default year to 2019 👇
  const [year, setYear] = useState("2020");
  const onChange = (e) => setYear(e.target.value);

  return (
    <>
      <h1>Revenue for 2018, 2019, or 2020</h1>
      <RadioButtons year={year} onChange={onChange} />
      <div style={{ height: 300 }}>
        <ColumnChart
          measures={[Md.Revenue]}
          viewBy={[Md.DateDatasets.OrderDate.MonthYear.Long]}
          filters={[
            newAbsoluteDateFilter(Md.DateDatasets.OrderDate, `${year}-01-01`, `${year}-12-31`)
          ]}
        />
      </div>
      <Hint />
    </>
  );
};
