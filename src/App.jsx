import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const addTask = (title) => {
    console.log('Sarcină nouă:', title)
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
    </main>
  )
}

export default App
