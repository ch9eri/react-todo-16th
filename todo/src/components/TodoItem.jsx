import React from 'react';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const { id, text } = todoItem;

  const Delete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <li>
      <span>{todoItem.text}</span>
      <button onClick={() => Delete(id)}>🗑</button>
    </li>
  );
};

export default TodoItem;
