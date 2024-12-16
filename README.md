# GoodData.UI SDK - Interactive Examples

Here are basic usage examples of [GoodData.UI](https://github.com/gooddata/gooddata-ui-sdk).

> [!WARNING]
> The examples in this repository are for the obsolete 8.x version of the GoodData UI SDK. For examples built with the latest SDK version, visit [GoodData UI SDK Examples](https://github.com/gooddata/gooddata-ui-sdk/tree/master/examples/sdk-interactive-examples).

> Please note that these Interactive Examples work well in all major browsers (Firefox, Chrome, Safari, …) except for [Brave](https://brave.com/).

## List of Examples

* Headline
* ComboChart
* RelativeDateFilter
* ChartConfig
* PivotTable
* InsightView
* DashboardView
* Execute
* Year Filter
* AttributeFilter
* Custom Attribute Filter
* Granularity
* DateFilter
* ColumnChart
* Measure Value Filter

## Running Examples locally

You can also run any example on your localhost.

1. `git clone git@github.com:gooddata/gooddata-ui-examples.git`
1. `cd gooddata-ui-examples/example-headline`
1. `yarn install`
1. `yarn start`

## Upgrading GoodData.UI SDK in all examples at once

To bump GoodData.UI SDK to the latest version in all the examples at once, you can run the script:

```bash
./scripts/bump-sdk.sh
```

This will upgrade all `@gooddata` packages in all the `example-*` folders. This can take several minutes, so be patient.

## Troubleshooting

`**ModuleNotFoundError** Could not find module in path: '@gooddata/sdk-model/esm/execution/measure/fingerprint' relative to '/node_modules/@gooddata/sdk-model/esm/execution/executionDefinition/index.js'`

This error might occur when some sort of ad-block is present in a browser, or when using the [Brave browser](https://brave.com/). Please turn off your ad-block related features, or try a different browser (e.g., Firefox or Safari).

## License

(C) 2017-2021 GoodData Corporation

This repository is under the GoodData commercial license available in the [LICENSE](LICENSE) file because it contains a commercial package, HighCharts.
