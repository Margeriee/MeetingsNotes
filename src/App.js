import './App.scss';
import React, { useEffect, useState } from 'react';
import { TaskTable } from './TaskTable/TaskTable';
import { AddTask } from './AddTask/AddTask';
import { PopUpForm } from './PopUpForm/PopUpForm';

const apiURL = 'http://localhost:3001';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [editTask, setEditTask] = useState([]);
  const [
      show,
      setShow
  ] = useState(false);

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

  const updateTask = (taskData) => {
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
      });
  };


  const showPopup = (task) => {
    setShow(true);
    setEditTask(task);
  }

  const handleDoneDone = (taskData) => {
    // console.log(JSON.stringify(taskData))
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
        
        getTasks();//([...tasks]);
        getDoneTasks();//([...doneTasks]);
      });
  };

  const handleDone = (taskData) => {
    // console.log(JSON.stringify(taskData))
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
        
        getTasks();//([...tasks]);
        getDoneTasks();//([...doneTasks]);
      });
  };
  console.log('showing show');
  console.log(show);
  return (
    <div className="App container">
      <AddTask onAdd={addTask}/> 
      <PopUpForm task={editTask} onEdit={updateTask} isEdit={show} setIsEdit={setShow} />
      <TaskTable deleteTask={deleteTask} tasks={tasks} done={handleDone} name="Zadania bieżące" onEdit={updateTask} showPopup={showPopup}/> 
      <TaskTable deleteTask={deleteTask} tasks={doneTasks} done={handleDoneDone} name="Zadania wykonane" onEdit={updateTask} showPopup={showPopup}/> 
    </div>
  )
}

export default App;