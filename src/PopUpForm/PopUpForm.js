import React, { useState } from "react";

export const PopUpForm = (props) => {
    const { task, onEdit, isEdit, setIsEdit } = props;
    const [form, setForm] = useState({
      description: task.description,
      person: task.person,
      deadline: task.deadline
    });

    const handleClose = () => {
        setIsEdit(false);
    }
    
    const handleChange = (event) => {
        setForm({
            description: form.description,
            person: form.person,
            deadline: form.deadline,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Handle Submit: ${task}`);
        console.log(task);

        onEdit({
          id: task.id,
          description: form.description,
          person: form.person,
          deadline: form.deadline,
          time: task.time,
          done: task.done,
        });
        
        setForm({
            description: "",
            person: "",
            deadline: ""
        })

        setIsEdit(false);
      }

    return ((isEdit === true) ? 
    (
        <>
            <form className="PopUpForm" onSubmit={handleSubmit}>
                <button className="closePopUpButton" type="button" onClick={handleClose}>x</button>
                <h3 className="popUpName">Edytuj zadanie</h3>
                <div>
                    <label>
                        Opis:
                        <input className="description" name="description" value={form.description} onChange={handleChange} />
                    </label>
                    <label>
                        Osoba przypisana: 
                        <select className="person" name="person" value={form.person} onChange={handleChange}>
                            <option></option>
                            <option value="Gosia">Gosia</option>
                            <option value="Kamila">Kamila</option>
                            <option value="Sebastian">Sebastian</option>
                            <option value="Wojtek">Wojtek</option>
                        </select>
                    </label>
                    <label>
                        Deadline:
                        <input className="deadline" type="date" name="deadline" value={form.deadline} onChange={handleChange} />
                    </label>
                </div>
                <button className="popUpButton" type="submit">Edytuj</button>
                </form>
        </>
    ) : "");
}