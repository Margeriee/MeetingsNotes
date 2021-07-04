import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faStopwatch } from '@fortawesome/free-solid-svg-icons';

  export const Task = (props) => {
    const { task, onDelete } = props;

    return (
      <>   
        <tr className="task">
            <td><input type="checkbox" className="task__checkbox" /></td>
            <td><span className="task__details task__description">{task.description} </span></td>
            <td><span className="task__details task__person">{task.person} </span></td>
            <td><span className="task__details task__deadline">{task.deadline} </span></td>
            <td>Time</td>
            <td>
                <FontAwesomeIcon className="fontAwesome time" icon={faStopwatch} />
                <FontAwesomeIcon className="fontAwesome edit" icon={faEdit} />
                <FontAwesomeIcon className="fontAwesome trash" icon={faTrashAlt} onClick={() => onDelete(task.id)}/>
            </td>
        </tr>
      </>
    );
  };