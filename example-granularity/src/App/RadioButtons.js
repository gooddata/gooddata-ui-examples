// (C) 2020 GoodData Corporation
import React from "react";
import * as Ldm from "../ldm";

export default ({ granularity, setGranularity }) => (
  <>
    <input
      type="radio"
      id="weekly"
      name="weekly"
      onChange={() => setGranularity(Ldm.DateWeekSunSat)}
      checked={granularity === Ldm.DateWeekSunSat}
    />
    <label htmlFor="weekly">Weekly</label>{" "}
    <input
      type="radio"
      id="monthly"
      name="monthly"
      onChange={() => setGranularity(Ldm.DateMonthYear.Long)}
      checked={granularity === Ldm.DateMonthYear.Long}
    />
    <label htmlFor="monthly">Monthly</label>{" "}
    <input
      type="radio"
      id="quarterly"
      name="quarterly"
      onChange={() => setGranularity(Ldm.DateQuarterYear)}
      checked={granularity === Ldm.DateQuarterYear}
    />
    <label htmlFor="quarterly">Quarterly</label>{" "}
  </>
);
