import React, { useState } from "react";

export const PopUpForm = (props) => {
    const { task, onEdit, isEdit, setIsEdit } = props;
    const [form, setForm] = useState({
      description: task.description,
      person: task.person,
      deadline: task.deadline
    });
    
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
        console.log(form)
        onEdit({
          id: task.id,
          description: form.description,
          person: form.person,
          deadline: form.deadline,
          time: task.time,
          done: task.done,
        });
        setIsEdit(false);
      }

    return ((isEdit === true) ? 
    (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Edytuj zadanie</h3>
                <label>
                    Opis
                    <input value={form.description} onChange={handleChange} />
                </label>
                <label>
                    Osoba przypisana
                    <select value={form.person} onChange={handleChange}>
                        <option value="Gosia">Gosia</option>
                        <option value="Kamila">Kamila</option>
                        <option value="Sebastian">Sebastian</option>
                        <option value="Wojtek">Wojtek</option>
                    </select>
                </label>
                <label>
                    Deadline
                    <input value={form.deadline} onChange={handleChange} />
                </label>
                <button type="submit">Edytuj</button>
                </form>
        </>
    ) : "");
}