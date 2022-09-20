import React from 'react';

const Input = () => {
  return (
    <div className="todo-input">
      <input
        className="input-box"
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button className="plus-btn" type="submit">
        ➕
      </button>
    </div>
  );
};

export default Input;
