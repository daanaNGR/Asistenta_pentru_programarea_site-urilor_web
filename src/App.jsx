import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title) => {
    const trimmed = title.trim()
    if (trimmed === '') return // nu permitem sarcini goale

    const newTask = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <main>
      <h1>Task Manager</h1>

      <div className="stats">
        <span>Total sarcini: {tasks.length}</span>
        <span>Finalizate: {completedCount}</span>
      </div>

      <TaskForm onAddTask={addTask} />

      {tasks.length === 0 ? (
        <p className="empty">Nu există sarcini momentan.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
