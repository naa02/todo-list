import React, { useState } from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { styled } from '@stitches/react';
import { v4 as uuid } from 'uuid';

const Wrapper = styled('div', {
  padding: 20,
  width: 400,
});

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodoItem = (content = '') => setTodos((prevTodos) => [
    { id: uuid(), content, isDone: false, createdAt: new Date() },
    ...prevTodos,
  ]);

  const toggleIsDone = id => setTodos(prevTodos =>
    prevTodos
      .map(it => it.id === id ? { ...it, isDone: !it.isDone } : it)
      .sort((a, b) => {
        const basisIsDone = (a.isDone ? 1 : 0) - (b.isDone ? 1 : 0);
        const basisDate = b.createdAt - a.createdAt;
        return basisIsDone !== 0 ? basisIsDone : basisDate;
      }));

  const deleteTodoItem = id => {
    setTodos(todos.filter(it => it.id !== id));
  }

  return (
    <Wrapper>
      <TodoForm addNewTodoItem={addNewTodoItem} />
      <TodoList todos={todos}
                toggleIsDone={toggleIsDone}
                deleteTodoItem={deleteTodoItem} />
    </Wrapper>
  );
}

export default TodoPage;
