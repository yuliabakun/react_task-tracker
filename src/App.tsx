import './index.scss'
import { Topbar } from './components/Topbar'
import { TodosList } from './components/TodosList'
import { Infobar } from './components/Infobar'

export const App = (): JSX.Element => {
  return (
    <main>
      <Topbar />

      <TodosList />

      <Infobar />
    </main>
  )
}
