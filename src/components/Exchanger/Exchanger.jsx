import React, { useEffect, useCallback} from "react";
import { setFrom, fetchData } from "../../store/exchangerSlice";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyInputWithFilters } from "..";
import style from "./style.module.scss";

const Exchanger = () => {
  const dispatch = useDispatch();
  const currenciesFrom = useSelector((state) => state.exchanger.currenciesFrom);
  const currenciesTo = useSelector((state) => state.exchanger.currenciesTo);
  const selectCurrency = useCallback((currency) => dispatch(setFrom(currency)), [dispatch])

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title}>Отдаёте</div>
      <CurrencyInputWithFilters
        cyrrencyList={currenciesFrom}
        selectCurrency={selectCurrency}
      />
      <div className={style.title}>Получаете</div>
      <CurrencyInputWithFilters
        cyrrencyList={currenciesTo}
        selectCurrency={() => {}}
      />
    </div>
  );
};

export default Exchanger;
