import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

const CurrencyInput = ({ selectCurrency, cyrrencyList = [] }) => {
  const [defaultCyrrency] = cyrrencyList;
  const [selected, setSelected] = useState(defaultCyrrency?.code);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    selectCurrency(value);
    setSelected(value);
  };

  useEffect(() => {
    if (defaultCyrrency) {
      console.log("defaultCyrrency");
      setSelected(defaultCyrrency.code);
      selectCurrency(defaultCyrrency.code);
    }
  }, [defaultCyrrency, selectCurrency]);

  return (
    <div className={style.container}>
      <input type="number" />
      <select name="select" onChange={handleChange} value={selected}>
        {cyrrencyList.map(({ name, code }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
