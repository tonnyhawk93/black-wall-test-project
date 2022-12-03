import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

const CurrencyInput = ({ selectCurrency, currencyList = [] }) => {
  const [defaultCurrency] = currencyList;
  const [selected, setSelected] = useState(defaultCurrency?.code);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    selectCurrency(value);
    setSelected(value);
  };

  useEffect(() => {
    if (defaultCurrency?.code) {
      setSelected(defaultCurrency.code);
      selectCurrency(defaultCurrency.code);
    }
  }, [defaultCurrency?.code, selectCurrency]);

  return (
    <div className={style.container}>
      <input type="number" />
      <select name="select" onChange={handleChange} value={selected}>
        {currencyList.map(({ name, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
