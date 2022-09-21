import React, { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Title>투두리스트</Title>
          <Input todoList={todoList} setTodoList={setTodoList} />
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Container>
      </Wrapper>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        width: 100%;
        height: 100%;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 20px;
    }

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: pink;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 400px;
  height: 600px;
  box-shadow: 1px 1px 10px white;
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  color: pink;
`;

export default App;
