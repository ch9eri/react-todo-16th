import React, { useState } from 'react';

const Input = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');

  //input 값 가져오기
  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handlePlusButton = (e) => {
    e.preventDefault();

    //todoList에 input 값 추가
    const newTodoList = todoList.concat({
      id: Date.now(),
      text,
    });
    setTodoList(newTodoList);
    setText('');
  };

  return (
    <form onSubmit={handlePlusButton} className="todo-input">
      <input
        className="input-box"
        type="text"
        value={text}
        placeholder="할 일을 입력하세요"
        onChange={handleInput}
      />
      <button className="plus-btn" type="submit">
        ➕
      </button>
    </form>
  );
};

export default Input;
