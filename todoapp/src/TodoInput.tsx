import React from 'react';
import bg_image from './assets/bg_image.jpg';

export default function TodoInput(props: any) {
  const { todoValue, setTodoValue, handleAddTodos } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        className="mt-2 p-2 border rounded-full outline-none w-[800px] size-[150px] text-center bg-black/30 " style={{ boxShadow: '0px 0px 128px -10px rgba(255,255,255,1)' }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-full hover:bg-blue-600 size-[150px] mt-2"
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue('');
        }}
      >
        Add
      </button>
    </div>
  );
}
