import React from 'react';

  export const Task = (props) => {
    const { task, onDelete, onEdit } = props;
    // const [isEdit, setIsEdit] = useState(false);
    // const [form, setForm] = useState({});

    // console.log(task);
    

    return (
      <>
        <li>
          <button onClick={() => onDelete(task.id)}>Wykonane</button>
          <span>{task.person} </span>
          <span>{task.description} </span>
          <span>{task.deadline} </span>
          {/* <button onClick={() => setIsEdit(true)}>Edytuj</button> */}
        </li>
      </>
    );
  };