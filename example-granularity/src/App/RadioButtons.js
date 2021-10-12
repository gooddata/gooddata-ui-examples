// (C) 2020 GoodData Corporation
import React from "react";
import * as Md from "../md";

export default ({ granularity, setGranularity }) => (
  <>
    <input
      type="radio"
      id="weekly"
      name="weekly"
      onChange={() => setGranularity(Md.DateDatasets.OrderDate.WeekSunSatYear.WeekNrYear)}
      checked={granularity === Md.DateDatasets.OrderDate.WeekSunSatYear.WeekNrYear}
    />
    <label htmlFor="weekly">Weekly</label>{" "}
    <input
      type="radio"
      id="monthly"
      name="monthly"
      onChange={() => setGranularity(Md.DateDatasets.OrderDate.MonthYear.Long)}
      checked={granularity === Md.DateDatasets.OrderDate.MonthYear.Long}
    />
    <label htmlFor="monthly">Monthly</label>{" "}
    <input
      type="radio"
      id="quarterly"
      name="quarterly"
      onChange={() => setGranularity(Md.DateDatasets.OrderDate.QuarterYear.USShort)}
      checked={granularity === Md.DateDatasets.OrderDate.QuarterYear.USShort}
    />
    <label htmlFor="quarterly">Quarterly</label>{" "}
  </>
);
