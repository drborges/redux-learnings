import React from "react";

import Todo from "../Todo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={onTodoClick} />
      ))}
    </ul>
  );
};

export default TodoList;
