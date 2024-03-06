export enum TodoFilters {
  All = 'All',
  Completed = 'Completed',
  Current = 'Current',
}

export const mockedTodos = [
  { id: '1', description: 'You can add, delete and filter todos', completed: false },
  { id: '2', description: 'Mark them as completed', completed: false },
  { id: '3', description: 'Maximum todo length is 100 chars', completed: false },
  { id: '5', description: 'Please, note: this data is mocked', completed: false },
]
