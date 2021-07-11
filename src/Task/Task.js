import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStopwatch } from '@fortawesome/free-solid-svg-icons';

  export const Task = (props) => {
    const { task, onDelete, done } = props;
    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(false);
    

    useEffect(() => { 
      if (start === "true") {
        const timer = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }}, []
    )

    const handleTimer = () => {
        setStart( start => !start );
        // timer.
        
    }

    return (
      <>   
        <tr className="task">
            <td><input type="checkbox" className="task__checkbox" checked={task.done} onChange={() => done(task)}/></td>
            <td><span className="task__details task__description">{task.description} </span></td>
            <td><span className="task__details task__person">{task.person} </span></td>
            <td><span className="task__details task__deadline">{task.deadline} </span></td>
            <td>{task.time}{timer}</td>
            <td>
                <FontAwesomeIcon className="fontAwesome time" icon={faStopwatch} onClick={handleTimer}/>
                <FontAwesomeIcon className="fontAwesome edit" icon={faEdit} />
                <FontAwesomeIcon className="fontAwesome trash" icon={faTrashAlt} onClick={() => onDelete(task.id)}/>
            </td>
        </tr>
      </>
    );
  };