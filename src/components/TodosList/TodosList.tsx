import './TodosList.scss'
import { useEffect, useState } from 'react'
import { TodoFilters } from '../../shared/data'
import { Todo } from '../../shared/types'
import { useAppSelector } from '../../store/hooks'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodosList = (): JSX.Element => {
  const { todos, activeFilter } = useAppSelector(state => state.todos)
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>(todos)

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
    <ul className='todos-list'>
      {visibleTodos.length > 0 && visibleTodos.map(todo =>
        <TodoItem key={todo.id} todo={todo} />
      )}
    </ul>
  )
}