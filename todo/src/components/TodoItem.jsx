import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const { id, text } = todoItem;

  //id 값이 다르면 반환 (id가 같으면 제외)
  const Delete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  //todo->done & done->todo (Checked 추가)
  const Toggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, Checked: !todo.Checked } : todo
      )
    );
  };

  return (
    <li>
      <span onClick={() => Toggle(id)}>{todoItem.text}</span>
      <DelBtn onClick={() => Delete(id)}>🗑</DelBtn>
    </li>
  );
};

const DelBtn = styled.button``;

export default TodoItem;
