import React from "react";
import style from "./style.module.scss";
import { FilterItem } from "./components/FilterItem";

const Filters = ({ onSelect, filtersList, activeFilter }) => {
  return (
    <div className={style.list}>
      {filtersList.map((filter) => (
        <FilterItem
          name={filter}
          key={filter}
          isActive={activeFilter === filter}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default Filters;
