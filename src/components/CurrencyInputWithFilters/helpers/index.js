import {
  CURRENCIES,
  CATEGORIES,
  CATEGORIES_MAP,
  DEFAULT_CATEGORY,
} from "../../../constants";

export const filterCurrencies = (currencyList, filter) => {
  if (filter === DEFAULT_CATEGORY) return currencyList;

  const filterName = CATEGORIES_MAP[filter];
  const currenciesNeaded = CURRENCIES[filterName];

  return currencyList.filter((currency) =>
    currenciesNeaded.includes(currency.code)
  );
};

export const filterCategories = (currencyList) => {
  return CATEGORIES.filter((category) => {
    if (category === DEFAULT_CATEGORY) return true;

    const categoryCode = CATEGORIES_MAP[category];
    const categoriesCurrencies = CURRENCIES[categoryCode];

    return currencyList.some(({ code }) => categoriesCurrencies.includes(code));
  });
};