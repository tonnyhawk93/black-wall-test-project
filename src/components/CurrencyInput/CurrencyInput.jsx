import React from "react";
import style from "./style.module.scss";

const CurrencyInput = ({ selectCurrency, cyrrencyList = [] }) => {
  const handleChange = (e) => {
    selectCurrency(e.target.value);
  };

  return (
    <div className={style.container}>
      <input type="number" />
      <select name="select" onChange={handleChange}>
        {cyrrencyList.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
