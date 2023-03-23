import React from 'react';
import { styled } from '@stitches/react';

const TodoListItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: 30,
  gap: '5px',
  padding: '0 10px',
});

const TodoListItemContent = styled('p', {
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  variants: {
    status: {
      doing: {},
      done: {
        color: '#a0a0a0',
        textDecoration: 'line-through',
      },
    },
  },
  defaultVariants: {
    status: 'doing',
  },
});

const TodoListDeleteButton = styled('button', {
  width: 70,
});

const TodoListItem = ({ id, content, isDone, toggleIsDone, deleteTodoItem }) => {
  return (
    <TodoListItemWrapper>
      <input type={'checkbox'}
             checked={isDone}
             onChange={() => toggleIsDone(id)} />
      <TodoListItemContent status={isDone ? 'done' : 'doing'}>
        {content}
      </TodoListItemContent>
      <TodoListDeleteButton onClick={() => deleteTodoItem(id)}
                            disabled={isDone}>
        Delete
      </TodoListDeleteButton>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
