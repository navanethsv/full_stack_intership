import Sidebar from './sidebar'
import Mainpart from './Mainpart'
import logo from "./assets/download.jpeg"
import TaskList from './TaskList'

function App() {
  return (
    <div className="app-container">
      <Sidebar name="PulseWork AI" logo={logo} />
      <Mainpart>
        <TaskList />
      </Mainpart>
    </div>
  )
}

export default App
