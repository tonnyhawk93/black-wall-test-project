import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

const FilterItem = ({ name, onClick, isActive = false }) => {
  const clickHandle = () => onClick(name);

  return (
    <div
      className={cn(style.item, { [style.active]: isActive })}
      onClick={clickHandle}
    >
      {name}
    </div>
  );
};

export default FilterItem;
