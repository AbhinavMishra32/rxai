import React from 'react';

export default function TodoInput(props: any) {
  const { todoValue, setTodoValue, handleAddTodos } = props;
  return (
    <header className="">
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        className="w-1/2 p-2 flex-1 rounded-full"
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
