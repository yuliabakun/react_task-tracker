import { useEffect, useState } from 'react'
import { TodoFilters } from '../shared/data'
import { Todo } from '../shared/types'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleTodoStatus } from '../store/todoSlice'

export const TodosList = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { todos, activeFilter } = useAppSelector(state => state.todos)
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>(todos)

  const handleToggleTodo = (todoId: string): void => {
    dispatch(toggleTodoStatus(todoId))
  }

  useEffect(() => {
    filterTodos()
  }, [todos, activeFilter])

  const filterTodos = (): void => {
    switch (activeFilter) {
      case TodoFilters.Completed:
        setVisibleTodos(todos.filter(todo => todo.completed))
        break
      case TodoFilters.Current:
        setVisibleTodos(todos.filter(todo => !todo.completed))
        break
      case TodoFilters.All:
      default:
        setVisibleTodos(todos)
    }
  }

  return (
    <>
      <p>todos list</p>

      <ul>
        {visibleTodos.length > 0 && visibleTodos.map(todo =>
          <li key={todo.id}>
            <input
              id={todo.id}
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.description}</label>
          </li>
        )}
      </ul>
    </>
  )
}