import React from 'react'

export default function TodoInput(props) {
    const {todoValue, setTodoValue, handleAddTodos  } = props
  return (
    <header className = "">
        <input value = {todoValue} onChange = {(e) => {setTodoValue(e.target.value)}} placeholder = "Enter todo..." 
        className = "w-full mt-2 p-2 pl-6 border-gray-200 rounded-full placeholder:font-light placeholder:text-zinc-300 text-white bg-zinc-900/20 bg-transparent border border-zinc-300
              transition-all ease-in-out
              hover:bg-zinc-900/25 focus:bg-zinc-900/35 duration-300 hover:ring  ring-offset  ring-opacity-50 ring-zinc-300
              focus:ring-[5px]"
        />
        <button onClick = {() => {handleAddTodos(todoValue)
        setTodoValue("")
        }}>Add</button>
    </header>
  )
}
