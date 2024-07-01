import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function TodoCard(props) {
    const { children, handleDeleteTodos, index, handleEditTodo } = props
    return (
        <li key={props.todoIndex}>
            {children}
            <div className="bg-stone-800 m-4 border border-stone-600 p-3 rounded-2xl flex items-center bg-gradient-to-br from-stone-900 to-stone-800 hover:scale-105 transition-all ease-in-out hover:shadow-xl hover:shadow-stone-600/40">
                <input type="checkbox" className='relative peer shrink-0 
  appearance-none w-6 h-6 border-2 border-stone-500 rounded-md bg-stone-600 focus:ring-offset-stone-600 focus:ring-2  hover:bg-stone-500  hover:border-stone-700 focus:ring-stone-300 transition-all ease-in-out checked:bg-stone-300 '
                    onClick={() => { handleDeleteTodos(index) }} />
                <p className="ml-4 font-unbounded text-stone-300">{props.todos}</p>
                <div className="ml-auto">
                    <button onClick={() => { handleEditTodo(index) }}>
                        <FontAwesomeIcon icon={faPenToSquare} className="bg-stone-500/40 p-2 flex rounded-lg border border-stone-300/30 mx-3 text-stone-300  hover:text-red-800 hover:shadow-xl hover:shadow-stone-600/40 transition-all ease-in-out" />
                    </button>
                    <button onClick={() => { handleDeleteTodos(index) }}>
                        <FontAwesomeIcon icon={faTrashCan} className='bg-stone-500/40 p-2 flex rounded-lg border border-stone-300/30 mx-3 text-stone-300  hover:text-red-800 hover:shadow-xl hover:shadow-stone-600/40 transition-all ease-in-out' />
                    </button>
                </div>
            </div>
        </li>
    )
}
