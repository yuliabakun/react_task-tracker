import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../shared/types'
import { TodoFilters } from '../shared/data'

interface InitialState {
  todos: Todo[]
  activeFilter: TodoFilters
}

const initialState: InitialState = {
  todos: [],
  activeFilter: TodoFilters.All,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos]
    },
    toggleTodoStatus: (state, action) => {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })

      state.todos = updatedTodos
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload
    }
  }
})

export const { addTodo, toggleTodoStatus, setFilter } = todosSlice.actions
export default todosSlice.reducer
