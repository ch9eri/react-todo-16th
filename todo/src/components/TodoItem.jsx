import React from 'react';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  return (
    <li>
      <span>{todoItem.text}</span>
      <button>🗑</button>
    </li>
  );
};

export default TodoItem;
