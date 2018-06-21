import React from "react";

const TodoApp = ({ todos, onAddTodo, onTodoClick }) => {
  return (
    <div>
      <input type="text" value="" onChange={() => {}} />
      <button type="button" onClick={onAddTodo}>
        Add
      </button>
      <TodoList todos={todos} onTodoClick={onTodoClick} />
    </div>
  );
};

export default TodoApp;
