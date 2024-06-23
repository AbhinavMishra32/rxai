import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TodoCard(props) {
    const {children, handleDeleteTodos, index, handleEditTodo} = props
  return (
    <li key = {props.todoIndex}>
        {children}
        <div>
            <input type="checkbox" />
            <button onClick = {() => {handleEditTodo(index)}}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick = {() => {handleDeleteTodos(index)}}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    </li>
  )
}
