import React from 'react';
import TodoListItem from './TodoListItem';
import { styled } from '@stitches/react';

const TodoListWrapper = styled('div', {
  width: '100%',
  paddingTop: 20,
});

const TodoListHeaderWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: 30,
  padding: '0 10px',
  borderBottom: '1px solid #787878',
  fontWeight: 'bold',
});

const TodoList = ({ todos, toggleIsDone, deleteTodoItem }) => {
  return (
    <TodoListWrapper>
      <TodoListHeaderWrapper>Todo List</TodoListHeaderWrapper>
      { todos.map(it => (
        <TodoListItem key={it.id}
                      id={it.id}
                      content={it.content}
                      isDone={it.isDone}
                      toggleIsDone={toggleIsDone}
                      deleteTodoItem={deleteTodoItem} />
      )) }
    </TodoListWrapper>
  );
}

export default TodoList;
