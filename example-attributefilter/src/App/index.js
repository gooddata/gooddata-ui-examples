// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { newPositiveAttributeFilter } from "@gooddata/sdk-model";
import * as Ldm from "../ldm";
import Hint from "./Hint";

export default () => {
  // Try changing the default filter 👇
  const [filters, setFilters] = useState([]);
  //const [filters, setFilters] = useState([
  //  newPositiveAttributeFilter(Ldm.ProductCategory, ["Outdoor", "Clothing"])
  //]);

  return (
    <>
      <h1>Attribute Filter Component</h1>

      <div style={{ margin: 10 }}>
        <AttributeFilter
          filter={newPositiveAttributeFilter(Ldm.ProductCategory, [])}
          onApply={(filter) => setFilters([filter])}
        />
      </div>

      <div style={{ height: 300 }}>
        <Treemap
          measures={[Ldm.Revenue]}
          viewBy={Ldm.ProductCategory}
          segmentBy={Ldm.Product}
          filters={filters}
          config={{ legend: { enabled: false } }}
        />
      </div>

      <Hint />
    </>
  );
};
