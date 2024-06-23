import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos: todos, } = props
  
  return (
    <ul>
      {todos.map((todos, todoIndex) => {
          return(
              <TodoCard {...props} key = {todoIndex} index = {todoIndex}>
                <p>{todos}</p>
              </TodoCard>
          )
      })}
    </ul>
  )
}
