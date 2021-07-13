import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStopwatch } from '@fortawesome/free-solid-svg-icons';

  export const Task = (props) => {
    const { task, onDelete, done, onEdit, showPopup } = props;
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)
    
    const handleStart = () => {
      setIsActive(!isActive)
      setIsPaused(!isPaused)
      if (isActive === true){
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)}
      else clearInterval(increment.current)
    }

    window.onbeforeunload = (event) => {
      task.time = task.time + timer;
      onEdit(task);
    };
  
    const formatTime = (timer) => {
      const getSeconds = `0${(timer % 60)}`.slice(-2)
      const minutes = `${Math.floor(timer / 60)}`
      const getMinutes = `0${minutes % 60}`.slice(-2)
      const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
      return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
      <>
        <tr className="task">
            <td><input type="checkbox" className="task__checkbox" checked={task.done} onChange={() => done(task)}/></td>
            <td><span className="task__details task__description">{task.description} </span></td>
            <td><span className="task__details task__person">{task.person} </span></td>
            <td><span className="task__details task__deadline">{task.deadline} </span></td>
            <td>{formatTime(task.time)} - {formatTime(timer)}</td>
            <td>
                <FontAwesomeIcon className="fontAwesome time" icon={faStopwatch} onClick={handleStart}/>
                <FontAwesomeIcon className="fontAwesome edit" icon={faEdit} onClick={() => showPopup(task)}/>
                
                <FontAwesomeIcon className="fontAwesome trash" icon={faTrashAlt} onClick={() => onDelete(task.id)}/>
            </td>
        </tr>
      </>
    );
  };