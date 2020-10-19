// (C) 2020 GoodData Corporation
import React from "react";

export default ({ year, onChange }) => (
  <>
    <input
      type="radio"
      id="2018"
      name="year"
      value="2018"
      onChange={onChange}
      checked={year === "2018"}
    />
    <label htmlFor="2018">2018</label>{" "}
    <input
      type="radio"
      id="2019"
      name="year"
      value="2019"
      onChange={onChange}
      checked={year === "2019"}
    />
    <label htmlFor="2019">2019</label>{" "}
    <input
      type="radio"
      id="2020"
      name="year"
      value="2020"
      onChange={onChange}
      checked={year === "2020"}
    />
    <label htmlFor="2020">2020</label>
  </>
);
