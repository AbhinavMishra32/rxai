import React from 'react';
import bg_image from './assets/bg_image.jpg';

export default function TodoInput(props: any) {
  const { todoValue, setTodoValue, handleAddTodos } = props;
  return (
    <div className="flex justify-center items-center p-8 ">
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatum, earum eum alias, soluta dolorum nostrum sed asperiores aliquam consequuntur beatae error ex provident odio molestiae quod harum voluptate porro?</p> */}
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        className="sm:w-3/5 placeholder:font-unbounded bg-stone-600 border border-stone-600 rounded-xl px-5 py-4 placeholder:text-stone-300 bg-gradient-to-tl from-stone-900 to-stone-600 text-stone-300 font-unbounded
        " />
      <button
        className="font-unbounded bg-stone-600 border border-stone-600 rounded-xl px-5 py-4 bg-gradient-to-tl mx-4 text-stone-100 hover:scale-110 transition-all ease-in-out"
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
