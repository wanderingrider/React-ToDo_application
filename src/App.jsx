import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conponents/InputTodo";
import { IncompleteTodos } from "./conponents/IncompleteTodos";
import { CompleteTodos } from "./conponents/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incomplteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  function onClickDelete(index) {
    const newTodos = [...incomplteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incomplteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodo = [...completeTodos, incomplteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodos = [...incomplteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodo);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplteTodos.length >= 5}
      />
      {incomplteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までだよ〜。消化しろ〜。
        </p>
      )}

      <IncompleteTodos
        todos={incomplteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
