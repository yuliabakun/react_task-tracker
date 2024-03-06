import './Topbar.scss'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../../shared/types'
import { useAppDispatch } from '../../store/hooks'
import { addTodo } from '../../store/todoSlice'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export const Topbar = (): JSX.Element => {
  const maxChars = 100
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState('')
  const [error, setError] = useState({
    empty: false,
    exceedMaxChars: false,
  })

  const handleAddTodo = (): void => {
    if (!todo) {
      setError({ ...error, empty: true })
      return
    }

    if (todo.length > maxChars) {
      setError({ ...error, exceedMaxChars: true })
      return
    }

    const newTodo: Todo = {
      id: uuidv4(),
      description: todo,
      completed: false,
    }

    dispatch(addTodo(newTodo))
    setTodo('')
    setError({ empty: false, exceedMaxChars: false })
  }

  const handleCancelClick = (): void => {
    setTodo('')
    setError({ empty: false, exceedMaxChars: false })
  }

  return (
    <div className='topbar'>
      <span className='topbar__container'>
        <input
          type='text'
          className='topbar__input'
          value={todo}
          placeholder='Start typing to add new todo...'
          onChange={(event) => setTodo(event.target.value)}
        />

        <div>
          <button
            className='topbar__button button__submit'
            onClick={handleAddTodo}
          >
            Submit
          </button>

          <button
            className='topbar__button'
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </span>

      {error.empty && <ErrorMessage message='Field cannot be empty' />}
      {error.exceedMaxChars && <ErrorMessage message='Max 100 characters' />}
    </div>
  )
}