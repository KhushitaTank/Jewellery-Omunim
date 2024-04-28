import React from "react";
import css from "./List.module.css";

const List = () => {
  return (
    <div className={css.wrapper}>
      <button>FIRM</button>
      <button>SETTING</button>
      <button>E-COMM</button>
      <button>ACCOUNTS</button>
      <button>SMS</button>
      <button>DAY BOOKS</button>
      <button>BOOKS</button>
      <button>GST</button>
      <button>TRIALS</button>
      <button>P/L REP</button>
      <button>B/L SHEETS</button>
      <button>LEDGER</button>
      <button>LOGS</button>
    </div>
  );
};

export default List;
