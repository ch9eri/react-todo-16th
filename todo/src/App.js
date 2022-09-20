import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  return (
    <div>
      <Input>
        <TodoList />
        <DoneList />
      </Input>
    </div>
  );
}

export default App;
