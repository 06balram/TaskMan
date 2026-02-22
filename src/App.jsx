import React from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import { useState } from 'react'
import { useEffect } from 'react'
import './Style.css'
export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
    setTasks([...tasks, task]);

  }
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))

  }
  const clearTasks =()=>{
    setTasks([]);
  }
  return (

    <div>
      <header>
        <h1>TaskMan</h1>
        <h3><i>Your Friendly Task Manager</i></h3>
      </header>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />
      {tasks.length > 0 && <button className='clear-btn'
        onClick={clearTasks}
      >Clear All Task</button>}
    </div >
  )
}
