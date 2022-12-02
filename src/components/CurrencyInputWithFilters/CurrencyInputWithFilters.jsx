import React, { useState, useEffect } from "react";
import { CurrencyInput, Filters } from "../";
import { CURRENCIES, FILTERS, FILTERS_MAP } from "../../constants";
import style from "./style.module.scss";

const [DEFAULT_FILTER] = FILTERS;

const filterList = (cyrrencyList, filter) => {
  if (filter === DEFAULT_FILTER) return cyrrencyList;

  const filterName = FILTERS_MAP[filter];
  const currenciesNeaded = CURRENCIES[filterName];

  return cyrrencyList.filter((cyrrency) =>
    currenciesNeaded.includes(cyrrency.code)
  );
};

const CurrencyInputWithFilters = ({ selectCurrency, cyrrencyList }) => {
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  useEffect(() => {
    setFilter(DEFAULT_FILTER);
  }, [cyrrencyList]);

  return (
    <div className={style.container}>
      <Filters
        onSelect={setFilter}
        filtersList={FILTERS}
        activeFilter={filter}
      />
      <CurrencyInput
        cyrrencyList={filterList(cyrrencyList, filter)}
        selectCurrency={selectCurrency}
      />
    </div>
  );
};

export default CurrencyInputWithFilters;
