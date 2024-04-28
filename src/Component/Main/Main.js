import React, { useState } from "react";
import css from "./Main.module.css";
import List from "../List/List";
import Form from "../Form/Form";
import TodayRate from "../TodayRate/TodayRate";
import Todo from "../Todo/Todo";

function Main() {
  return (
    <div className={css.wrapper}>
      <div>
        <aside>
          <TodayRate />
        </aside>
        <aside>
          <Todo />
          <div></div>
        </aside>
      </div>
      <div className={css.mainContainer}>
        <div className={css.Contain}>
          <div className={css.searchWrapper}>
            <input placeholder="SEARCH..." type={"text"} />
            <div className={css.img}>SEARCH</div>
          </div>
        </div>
        <Form />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default Main;
