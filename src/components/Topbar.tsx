import { useState } from 'react'
import { Todo } from '../shared/types'
import { useAppDispatch } from '../store/hooks'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../store/todoSlice'

export const Topbar = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState('')
  const [error, setError] = useState({
    empty: false,
    exceedMaxChars: false,
  })

  const maxChars = 100

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

  return (
    <div>
      {error.empty && <p>Field is required</p>}
      {error.exceedMaxChars && <p>Maximum 100 characters allowed</p>}
      <label>Add todo</label>
      <input
        type='text'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}