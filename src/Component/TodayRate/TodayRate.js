import React from "react";
import css from "./TodayRate.module.css";

const TodayRate = () => {
  return (
    <div className={css.wrapper}>
      <h1>Today's rate</h1>
      <div className={css.listWrapper}>
        <ul className={css.titleListWrapper}>
          <li>{`GOLD (24 K )`}</li>
          <li>{`GOLD-91.67 (22 K )`}</li>
          <li>{`GOLD-83.34 (20 K )`}</li>
          <li>{`GOLD-83.34 (20 K )`}</li>
        </ul>
        <ul className={css.value}>
          <li>{`₹. 70000 (GM)`}</li>
          <li>{`₹. 64169 (GM)`}</li>
          <li>{`₹. 64169 (GM)`}</li>
          <li>{`₹. 52500 (GM)`}</li>
        </ul>
      </div>
    </div>
  );
};

export default TodayRate;
