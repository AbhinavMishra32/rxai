import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TodoCard(props) {
    const { children, handleDeleteTodos, index, handleEditTodo } = props
    return (
        <li key={props.todoIndex}>
            {children}
            <div className="bg-stone-800 m-4 border border-stone-600 p-3 rounded-2xl flex items-center bg-gradient-to-br from-stone-900 to-stone-800">
                <input type="checkbox" className='relative peer shrink-0 
  appearance-none w-6 h-6 border-2 border-stone-500 rounded-md bg-stone-600 focus:ring-offset-stone-600 focus:ring-2  hover:bg-stone-500  hover:border-stone-700 focus:ring-stone-300 transition-all ease-in-out checked:bg-stone-300 ' />
                <p className="ml-4 font-unbounded text-stone-300">{props.todos}</p>
                <button onClick={() => { handleEditTodo(index) }}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => { handleDeleteTodos(index) }}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </li>
    )
}
