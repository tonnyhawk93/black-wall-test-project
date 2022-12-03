export const CURRENCIES = {
  CRYPTO: ["BTC", "ETH", "USDTTRC"],
  BANKS: ["ACRUB", "SBERRUB", "TCSBRUB"],
  CASH: ["CASHUSD", "CASHRUB"],
}

export const FILTERS = ["Все", "Криптовалюты", "Наличные", "Банки"];

export const [DEFAULT_FILTER] = FILTERS;

export const FILTERS_MAP = {
  "Все": "ALL",
  "Криптовалюты": "CRYPTO",
  "Наличные": "CASH",
  "Банки": "BANKS",
};
