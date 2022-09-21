import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({ todoList, setTodoList, Delete, Toggle }) => {
  const todosList = todoList.filter((todo) => todo.Checked === false);
  const donesList = todoList.filter((todo) => todo.Checked === true);

  return (
    <AllList>
      <ListTitle>To Do ({todosList.length})</ListTitle>
      <List>
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
      </List>
      <Line />
      <ListTitle>Done ({donesList.length})</ListTitle>
      <List>
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
      </List>
    </AllList>
  );
};

const AllList = styled.div``;

const ListTitle = styled.p`
  font-size: 20px;
`;

const List = styled.ul`
  height: 150px;
  overflow: auto;
`;

const Line = styled.hr`
  border: 0px;
  border-top: 4px dashed pink;
`;

export default TodoList;
