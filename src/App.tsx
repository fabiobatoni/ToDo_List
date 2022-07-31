import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import './global.css'

export function App() {

  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  )
}

