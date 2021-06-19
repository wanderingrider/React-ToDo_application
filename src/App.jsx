import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <ul>
          <div>
            <li>ああああああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のToDo</p>
        <ul>
          <div>
            <li>ううううううううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
