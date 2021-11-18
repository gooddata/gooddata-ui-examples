// (C) 2021 GoodData Corporation
import React, { useState } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { modifyMeasure, newMeasureValueFilter } from "@gooddata/sdk-model";
import RangeSlider from "rsuite/RangeSlider";
import * as Md from "../md";
import Hint from "./Hint";

const SLIDER_STEP = 1000;
const SLIDER_MIN = 0;
const SLIDER_MAX = 20000;
const DEFAULT_MIN = 2000;
const DEFAULT_MAX = 5000;

export default () => {
  const budget = modifyMeasure(Md.Budget.Sum, m => m.title('Budget'));
  const [minMax, setMinMax] = useState({ min: DEFAULT_MIN, max: DEFAULT_MAX });
  const betweenFilter = newMeasureValueFilter(budget, "BETWEEN", minMax.min, minMax.max);

  return (
    <>
      <h1>Measure Value Filter</h1>

      <div style={{ height: 300 }}>
        <ColumnChart
          measures={[budget]}
          viewBy={Md.CampaignCategory}
          filters={[betweenFilter]}
        />
      </div>

      <div style={{ margin: "auto", marginBottom: 100, width: '90%' }}>
        <RangeSlider
          graduated
          step={SLIDER_STEP}
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          defaultValue={[minMax.min, minMax.max]}
          onChange={newMinMax => {
            newMinMax.sort((a, b) => a - b);
            setMinMax({ min: newMinMax[0], max: newMinMax[1] });
          }}
          renderMark={mark => `${mark / 1000}k`}
        />
      </div>

      <Hint />
    </>
  );
};
