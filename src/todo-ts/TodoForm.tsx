import React, { KeyboardEvent, useRef, useState } from 'react';

type TodoListType = {
  addNewTodoItem: Function,
};

const TodoForm: React.FC<TodoListType> = ({ addNewTodoItem }) => {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClickAddButton = () => {
    if (content.trim() === '') return;
    addNewTodoItem(content.trim());
    setContent('');
    inputRef?.current?.focus();
  }

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // 다음 코드는 한글 입력 시 문제를 해결하기 위해 추가한 코드립니다.
    // 한글은 영어와 달리 조합문자이기 때문에 composing 상태일 때의 이벤트는 무시하도록 합니다.
    // reference: https://junhyunny.github.io/react/typescript/korean-keyboard-event-error/
    if (e.nativeEvent.isComposing) return;
    if (e?.key === 'Enter') {
      handleOnClickAddButton();
    }
  }

  return (
    <div>
      <input ref={inputRef}
             value={content}
             onChange={(e) => setContent(e?.target?.value)}
             onKeyDown={handleOnKeyDown} />
      <button onClick={handleOnClickAddButton}>
        Create New Todo
      </button>
    </div>
  );
}

export default TodoForm;
