import React from 'react';

  export const Task = (props) => {
    const { task, onDelete} = props;

    return (
      <>
        <li>
          <button onClick={() => onDelete(task.id)}>Wykonane</button>
          <span>{task.person} </span>
          <span>{task.description} </span>
          <span>{task.deadline} </span>
        </li>
      </>
    );
  };