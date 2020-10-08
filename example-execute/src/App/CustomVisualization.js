import React from "react";
import ReactHighcharts from "react-highcharts";
import * as Ldm from "../ldm";

export default ({ error, isLoading, result }) => {
  if (isLoading) {
    return <span>Loading…</span>;
  }

  if (error) {
    return <span>Something went wrong :-(</span>;
  }

  if (result) {
    const config = {
      chart: {
        type: "column"
      },
      title: {
        text: "🎉 Custom Chart Built with Highcharts 🎉"
      },
      series: result
        .data()
        .series()
        .firstForMeasure(Ldm.RevenueTop10)
        .dataPoints()
        .map((row, i) => ({ data: [parseFloat(row.rawValue)] }))
    };

    return <ReactHighcharts config={config} />;
  }

  return "🧟‍♂️ UGLY INIT";
};
