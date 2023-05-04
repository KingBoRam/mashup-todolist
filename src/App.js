import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import Todolist from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f3f0ff;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <Todolist />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
