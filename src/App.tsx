import './index.scss'
import { Topbar } from './components/Topbar/Topbar'
import { TodosList } from './components/TodosList/TodosList'
import { Filterbar } from './components/Filterbar/Filterbar'

export const App = (): JSX.Element => {
  return (
    <main>
      <Topbar />

      <TodosList />

      <Filterbar />
    </main>
  )
}
