import './App.scss';
import React, { useEffect, useState } from 'react';
import { TaskTable } from './TaskTable/TaskTable';
import { AddTask } from './AddTask/AddTask';

const apiURL = 'http://localhost:3001';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    getTasks();
    getDoneTasks();
  }, []);

  const getTasks = () => {
    fetch(`${apiURL}/tasks`).then((res) => res.json()).then(
      (task) => {
        setTasks(task.filter(task => task.done === false));
      } 
    )
  };

  const getDoneTasks = () => {
    fetch(`${apiURL}/tasks`).then((res) => res.json()).then(
      (doneTask) => {
        setDoneTasks(doneTask.filter(task => task.done === true));
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

  const handleDoneDone = (taskData) => {
    console.log(JSON.stringify(taskData))
    taskData.done = !taskData.done
    fetch(`${apiURL}/tasks/${taskData.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData),
    }).then(res => res.json())
      .then(updatedTask => {
        const taskToUpdate = doneTasks.find(task => task.id === updatedTask.id);
        Object.assign(taskToUpdate, updatedTask);
        
        setTasks([...tasks]);
        setDoneTasks([...doneTasks]);
      });
  };

  const handleDone = (taskData) => {
    console.log(JSON.stringify(taskData))
    taskData.done = !taskData.done
    fetch(`${apiURL}/tasks/${taskData.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData),
    }).then(res => res.json())
      .then(updatedTask => {
        const taskToUpdate = tasks.find(task => task.id === updatedTask.id);
        Object.assign(taskToUpdate, updatedTask);
        
        setTasks([...tasks]);
        setDoneTasks([...doneTasks]);
      });
  };

  return (
    <div className="App container">
      <AddTask onAdd={addTask}/> 
      <TaskTable deleteTask={deleteTask} tasks={tasks} done={handleDone}/> 
      <TaskTable deleteTask={deleteTask} tasks={doneTasks} done={handleDoneDone}/> 
    </div>
  )
}

export default App;