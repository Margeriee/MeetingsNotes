import React from 'react';
import { Task } from '../Task/Task';

export const TaskTable = (props) => {
    const {name, tasks, deleteTask, done, onEdit, showPopup} = props;

    return (
        <div className="table">
            <div className="div__h2"><h2>{name}</h2></div>
            <table>
                <thead>
                <tr>
                    <th>Done</th>
                    <th>Zadanie</th>
                    <th>Osoba</th>
                    <th>Deadline</th>
                    <th>Czas</th>
                    <th>Akcja</th>
                </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <Task key={task.id} task={task} onDelete={deleteTask} done={done} onEdit={onEdit} showPopup={showPopup}/>)}
                </tbody>
            </table>   
        </div>
    )
}