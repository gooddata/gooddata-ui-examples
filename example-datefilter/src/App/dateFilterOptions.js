// (C) 2020 GoodData Corporation
import { DateGranularity } from "@gooddata/sdk-model";

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

export default {
  relativeForm: {
    localIdentifier: "relativeForm",
    type: "relativeForm",
    granularity: DateGranularity.month,
    name: "Floating range",
    visible: true,
    from: 0,
    to: -1
  },
  relativePreset: {
    [DateGranularity.date]: [
      {
        from: -6,
        to: 0,
        granularity: DateGranularity.date,
        localIdentifier: "last7Days",
        type: "relativePreset",
        visible: true,
        name: "Last 7 days"
      },
      {
        from: -29,
        to: 0,
        granularity: DateGranularity.date,
        localIdentifier: "last30Days",
        type: "relativePreset",
        visible: true,
        name: "Last 30 days"
      },
      {
        from: -89,
        to: 0,
        granularity: DateGranularity.date,
        localIdentifier: "last90Days",
        type: "relativePreset",
        visible: true,
        name: "Last 90 days"
      }
    ],
    [DateGranularity.month]: [
      {
        from: 0,
        to: 0,
        granularity: DateGranularity.month,
        localIdentifier: "thisMonth",
        type: "relativePreset",
        visible: true,
        name: "This month"
      },
      {
        from: -1,
        to: -1,
        granularity: DateGranularity.month,
        localIdentifier: "lastMonth",
        type: "relativePreset",
        visible: true,
        name: "Last month"
      },
      {
        from: -11,
        to: 0,
        granularity: DateGranularity.month,
        localIdentifier: "last12Months",
        type: "relativePreset",
        visible: true,
        name: "Last 12 months"
      }
    ]
  }
};
