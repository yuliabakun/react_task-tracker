import './Filterbar.scss'
import { TodoFilters } from '../../shared/data'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setFilter } from '../../store/todoSlice'
import { useState } from 'react'

export const Filterbar = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(state => state.todos)
  const [selectedFilter, setSelectedFilter] = useState<TodoFilters>(TodoFilters.All)

  const handleFilterChange = (filter: TodoFilters): void => {
    setSelectedFilter(filter)
    dispatch(setFilter(filter))
  }

  const getTodosStatus = (): string => {
    const completed = todos.filter(todo => todo.completed).length
    const current = todos.filter(todo => !todo.completed).length

    return `${completed} completed, ${current} active`
  }

  return (
    <div className='filterbar'>
      <p className='filterbar__status'>{getTodosStatus()}</p>

      <div className='filterbar__filters'>
        {Object.values(TodoFilters).map(filter =>
          <button
            key={filter}
            className={selectedFilter === filter ? 'filter--active' : 'filter'}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        )}
      </div>
    </div>
  )
}
