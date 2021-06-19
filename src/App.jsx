import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area ">
        <p className="title">未完了のToDo</p>
        <ul>
          <div class="list-row">
            <li>ああああああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div div class="list-row">
            <li>いいいいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          <div div class="list-row">
            <li>ううううううううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
