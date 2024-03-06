import './TodoItem.scss'
import { Todo } from '../../shared/types'
import { useAppDispatch } from '../../store/hooks'
import { deleteTodo, toggleTodoStatus } from '../../store/todoSlice'
import deleteIcon from '../../shared/media/icon-delete.png'
import { useState } from 'react'

type Props = { todo: Todo }

export const TodoItem: React.FC<Props> = ({ todo }): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <li
      className='todo-item'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <input
        id={todo.id}
        type='checkbox'
        className='todo-item__checkbox'
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoStatus(todo.id))}
      />

      <label
        htmlFor={todo.id}
        className={todo.completed ? 'todo-item__label--completed' : 'todo-item__label'}
      >
        {todo.description}
      </label>

      {isHovered &&
        <button
          type='button'
          className='delete-button'
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <img
            src={deleteIcon}
            alt='delete icon'
            className='delete-button__icon'
          />
        </button>
      }
    </li>
  )
}