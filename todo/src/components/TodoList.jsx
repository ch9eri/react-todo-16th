import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      <p className="todoTitle">To Do ({todoList.length})</p>
      <ul className="todoList">
        {todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
