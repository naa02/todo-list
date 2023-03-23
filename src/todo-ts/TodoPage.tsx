import React, { useState } from "react";
import TodoList from './TodoList';
import { TodoItem } from './types';
import { styled } from '@stitches/react';
import { v4 as uuid } from 'uuid';
import TodoForm from "./TodoForm";

const Wrapper = styled('div', {
  padding: 20,
  width: 400,
});

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addNewTodoItem = (content = '') => setTodos((prevTodos) => [
    { id: uuid(), content, isDone: false, createdAt: new Date() },
    ...prevTodos,
  ]);

  const toggleIsDone = (id: string) => setTodos(prevTodos =>
    prevTodos
      .map(it => it.id === id ? { ...it, isDone: !it.isDone } : it)
      .sort((a, b) => {
        const basisIsDone = (a.isDone ? 1 : 0) - (b.isDone ? 1 : 0);
        const basisDate = b.createdAt.getMilliseconds() - a.createdAt.getMilliseconds();
        return basisIsDone !== 0 ? basisIsDone : basisDate;
      }));

  const deleteTodoItem = (id: string) => {
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
