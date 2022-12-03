import React, { useState, useEffect } from "react";
import { CurrencyInput, Filters } from "../";
import {
  CURRENCIES,
  FILTERS,
  FILTERS_MAP,
  DEFAULT_FILTER,
} from "../../constants";
import style from "./style.module.scss";

const filterList = (currencyList, filter) => {
  if (filter === DEFAULT_FILTER) return currencyList;

  const filterName = FILTERS_MAP[filter];
  const currenciesNeaded = CURRENCIES[filterName];

  return currencyList.filter((currency) =>
    currenciesNeaded.includes(currency.code)
  );
};

const CurrencyInputWithFilters = ({ selectCurrency, currencyList }) => {
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const filtersList = FILTERS.filter((filter) => {
    if (filter === DEFAULT_FILTER) return true;

    const filtersCode = FILTERS_MAP[filter];
    const filtersCurrencies = CURRENCIES[filtersCode];

    return currencyList.some(({ code }) => filtersCurrencies.includes(code));
  });

  useEffect(() => {
    setFilter(DEFAULT_FILTER);
  }, [currencyList]);

  return (
    <div className={style.container}>
      <Filters
        onSelect={setFilter}
        filtersList={filtersList}
        activeFilter={filter}
      />
      <CurrencyInput
        currencyList={filterList(currencyList, filter)}
        selectCurrency={selectCurrency}
      />
    </div>
  );
};
export default CurrencyInputWithFilters;
