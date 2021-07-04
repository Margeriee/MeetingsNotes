import './App.scss';
import React, { useEffect, useState } from 'react';
import { TaskTable } from './TaskTable/TaskTable';
import { AddTask } from './AddTask/AddTask';

const apiURL = 'http://localhost:3001';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch(`${apiURL}/tasks`).then((res) => res.json()).then(
      (task) => {
        setTasks(task);
      } 
    )
  };

  const addTask = (task) => {
    fetch(`${apiURL}/tasks`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task),
    }).then(res => res.json())
      .then(newTask => {
        setTasks([
          ...tasks,
          newTask,
        ]);
      });
  };

  const deleteTask = (taskId) => {
    fetch(`${apiURL}/tasks/${taskId}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        setTasks(tasks.filter(task => task.id !== taskId));
      }
    })
  }

  return (
    <div className="App container">
      <AddTask onAdd={addTask}/> 
      <TaskTable deleteTask={deleteTask} tasks={tasks}/> 
    </div>
  )
}

export default App;