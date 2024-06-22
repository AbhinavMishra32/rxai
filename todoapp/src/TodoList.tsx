import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'


export default function TodoList() {
  let todo: string[] = [
    'Learn React',
    'Learn TypeScript',
    'Build a Todo App'
  ]

  return (
    <ul>
      {todo.map((todo, todoIndex) => {
          return(
            <li key = {todoIndex}>
              <input type="checkbox" />
              {todo}
              <FontAwesomeIcon icon={faPenToSquare} />
            </li>
          )
      })}
    </ul>
  )
}
