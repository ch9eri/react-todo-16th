import React, { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Input todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <DoneList />
    </div>
  );
}

export default App;
