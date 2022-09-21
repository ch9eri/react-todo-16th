import React, { useState, useCallback } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
//import styled from "styled-components";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>투두리스트</h1>
      <Input todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
