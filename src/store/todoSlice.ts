import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../shared/types'
import { TodoFilters, mockedTodos } from '../shared/data'

interface InitialState {
  todos: Todo[]
  activeFilter: TodoFilters
}

const initialState: InitialState = {
  todos: mockedTodos,
  activeFilter: TodoFilters.All,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos]
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
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

export const { addTodo, deleteTodo, toggleTodoStatus, setFilter } = todosSlice.actions
export default todosSlice.reducer
