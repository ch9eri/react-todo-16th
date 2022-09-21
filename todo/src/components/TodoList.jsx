import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, setTodoList, Delete, Toggle }) => {
  const todosList = todoList.filter((todo) => todo.Checked === false);
  const donesList = todoList.filter((todo) => todo.Checked === true);

  return (
    <div>
      <p className="todoTitle">To Do ({todosList.length})</p>
      <ul className="todoList">
        {todosList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
            Delete={Delete}
            Toggle={Toggle}
          />
        ))}
      </ul>
      <p className="doneTitle">Done ({donesList.length})</p>
      <ul className="doneList">
        {donesList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
            Delete={Delete}
            Toggle={Toggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
