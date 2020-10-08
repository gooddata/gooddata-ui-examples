import React, { useState } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";
import RadioButtons from "./RadioButtons";

const DATASET = "date.dataset.dt";

export default () => {
  // Try changing default year to 2019 👇
  const [year, setYear] = useState("2020");
  const onChange = (e) => setYear(e.target.value);

  return (
    <>
      <h1>Revenue for 2018, 2019 or 2020</h1>
      <RadioButtons year={year} onChange={onChange} />
      <div style={{ height: 300 }}>
        <ColumnChart
          measures={[Ldm.Revenue]}
          viewBy={[Ldm.DateMonthYear.Long]}
          filters={[
            newAbsoluteDateFilter(DATASET, `${year}-01-01`, `${year}-12-31`)
          ]}
        />
      </div>
      <Hint />
    </>
  );
};
