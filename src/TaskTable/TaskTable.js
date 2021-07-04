import React from 'react';
import { Task } from '../Task/Task';

export const TaskTable = (props) => {
    const {deleteTask, tasks} = props;
    return (
        <div className="table">
            <div className="div__h2"><h2>Bieżące zadania</h2></div>
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
                    {tasks.map(task => <Task onDelete={deleteTask} key={task.id} task={task} />)}
                </tbody>
            </table>   
        </div>
    )
}