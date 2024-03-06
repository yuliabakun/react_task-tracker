import { TodoFilters } from '../shared/data'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setFilter } from '../store/todoSlice'

export const Infobar = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(state => state.todos)

  const handleFilterChange = (filter: string): void => {
    dispatch(setFilter(filter))
  }

  return (
    <>
      <div>
        <select onChange={(event) => handleFilterChange(event.target.value)}>
          <option value={TodoFilters.Completed}>Completed</option>
          <option value={TodoFilters.Current}>Current</option>
          <option value={TodoFilters.All}>All</option>
        </select>
      </div>

      <div>
        <p>{todos.filter(todo => todo.completed).length} completed</p>
        <p>{todos.filter(todo => !todo.completed).length} active</p>
      </div>
    </>
  )
}