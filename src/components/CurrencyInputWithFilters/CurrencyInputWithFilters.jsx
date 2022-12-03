import React, { useState, useEffect, useMemo } from "react";
import { filterCategories, filterCurrencies } from "./helpers";
import { CurrencyInput, Filters } from "../";
import { DEFAULT_CATEGORY } from "../../constants";
import style from "./style.module.scss";

const CurrencyInputWithFilters = ({ selectCurrency, currencyList }) => {
  const [filter, setFilter] = useState(DEFAULT_CATEGORY);
  const filtersList = useMemo(
    () => filterCategories(currencyList),
    [currencyList]
  );

  const filteredCurrenciesList = useMemo(
    () => filterCurrencies(currencyList, filter),
    [currencyList, filter]
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
        currencyList={filteredCurrenciesList}
        selectCurrency={selectCurrency}
      />
    </div>
  );
};
export default CurrencyInputWithFilters;
