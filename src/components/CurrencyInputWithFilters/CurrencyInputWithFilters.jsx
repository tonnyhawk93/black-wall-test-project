import React, { useState, useEffect, useMemo } from "react";
import { CurrencyInput, Filters } from "../";
import {
  CURRENCIES,
  CATEGORIES,
  CATEGORIES_MAP,
  DEFAULT_CATEGORY,
} from "../../constants";
import style from "./style.module.scss";

const filterCurrencies = (currencyList, filter) => {
  if (filter === DEFAULT_CATEGORY) return currencyList;

  const filterName = CATEGORIES_MAP[filter];
  const currenciesNeaded = CURRENCIES[filterName];

  return currencyList.filter((currency) =>
    currenciesNeaded.includes(currency.code)
  );
};

const filterCategories = (currencyList) => {
  return CATEGORIES.filter((category) => {
    if (category === DEFAULT_CATEGORY) return true;

    const categoryCode = CATEGORIES_MAP[category];
    const categoriesCurrencies = CURRENCIES[categoryCode];

    return currencyList.some(({ code }) => categoriesCurrencies.includes(code));
  });
};

const CurrencyInputWithFilters = ({ selectCurrency, currencyList }) => {
  const [filter, setFilter] = useState(DEFAULT_CATEGORY);
  const filtersList = useMemo(
    () => filterCategories(currencyList),
    [currencyList]
  );

  useEffect(() => {
    setFilter(DEFAULT_CATEGORY);
  }, [currencyList]);

  return (
    <div className={style.container}>
      <Filters
        onSelect={setFilter}
        filtersList={filtersList}
        activeFilter={filter}
      />
      <CurrencyInput
        currencyList={filterCurrencies(currencyList, filter)}
        selectCurrency={selectCurrency}
      />
    </div>
  );
};
export default CurrencyInputWithFilters;
