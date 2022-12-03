import React, { useEffect, useCallback } from "react";
import { ReactComponent as ExchangeIcon } from "./assets/exchange.svg";
import { setFrom, setTo, fetchData } from "../../store/exchangerSlice";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyInputWithFilters } from "..";
import style from "./style.module.scss";

const Exchanger = () => {
  const dispatch = useDispatch();

  const { currenciesFrom, currenciesTo } = useSelector(
    (state) => state.exchanger
  );
  const selectCurrencyFrom = useCallback(
    (currency) => dispatch(setFrom(currency)),
    [dispatch]
  );
  const selectCurrencyTo = useCallback(
    (currency) => dispatch(setTo(currency)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.title}>Отдаёте</div>
      <CurrencyInputWithFilters
        currencyList={currenciesFrom}
        selectCurrency={selectCurrencyFrom}
      />
      <div className={style.divider}>
        <ExchangeIcon />
      </div>
      <div className={style.title}>Получаете</div>
      <CurrencyInputWithFilters
        currencyList={currenciesTo}
        selectCurrency={selectCurrencyTo}
      />
    </div>
  );
};

export default Exchanger;
