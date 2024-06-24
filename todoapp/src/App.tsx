import React from 'react'
import bg_image from './assets/bg_image.jpg'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useState, useEffect } from 'react'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList: string[]) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodos(todoIndex: number) {
    const newTodoList = todos.filter((todo, index) => {
      return index !== todoIndex;
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  })

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 relative" style={{ backgroundImage: `url(${bg_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
    <div className="min-h-screen bg-gray-200 ">
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </div>
  )
}
