import './App.scss';
import React, { useEffect, useState } from 'react';
import { Task } from './Task/Task';
import { AddTask } from './AddTask/AddTask'

const apiURL = 'http://localhost:3005';


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
    <div className="App">
    <AddTask onAdd={addTask}/>
      <ul>
        {tasks.map(task => <Task onDelete={deleteTask} key={task.id} task={task} />)}
      </ul>      
    </div>
  )
}



// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     getTasks();
//   }, []);

//   const getTasks = () => {
//     fetch(`${apiURL}/tasks`).then(res => res.json())
//       .then(taskData => {
//         setTasks(taskData)
//       });
//   }

//   const deleteTask = (taskId) => {
//     fetch(`${apiURL}/cars/${taskId}`, {
//       method: 'DELETE',
//     }).then(res => {
//       if (res.ok) {
//         setTasks(tasks.filter(task => task.id !== taskId));
//       }
//     })
//   }

//   const addTask = (task) => {
//     fetch(`${apiURL}/tasks`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(task),
//     }).then(res => res.json())
//       .then(newTask => {
//         setTasks([
//           ...tasks,
//           newTask,
//         ]);
//       });
//   };

//   const updateTask = (taskData) => {
//     fetch(`${apiURL}/tasks/${taskData.id}`, {
//       method: 'PUT',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(taskData),
//     }).then(res => res.json())
//       .then(updatedTask => {
//         const taskToUpdate = tasks.find(task => task.id === updatedTask.id);
//         Object.assign(taskToUpdate, updatedTask);
        
//         setTasks([...tasks]);
//       });
//   };

//   const handleRemoveTask = (taskId) => {
//     deleteTask(taskId)
//   }

//   const handleEditTask = (task) => {
//     updateTask(task);
//   }

//   return (
//     <div>
//       <AddTask onAdd={addTask} />
//       <ul className="list-task">
//         {tasks.map(task =>
//           <Task
//             task={task}
//             onDelete={handleRemoveTask}
//             onEdit={handleEditTask}
//           />
//         )}
//       </ul>
//     </div>
//   );
// }


export default App;