import React from 'react';

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const { id, text } = todoItem;

  //id 값이 다르면 반환 (id가 같으면 제외)
  const Delete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const Toggle= (id)=>{
    setTodoList(todoList.map((todo)=>todo.id === id ? { ... todo, Checked: !todo.Checked} : todo));
    console.log('toggled');
    };

  return (
    <li>
      <span onClick={() => Toggle(id)}>{todoItem.text}</span>
      <button onClick={() => Delete(id)}>🗑</button>
    </li>
  );
};

export default TodoItem;
