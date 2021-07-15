import React, { useState } from 'react';

export const AddTask = (props) => {
  const {onAdd} = props;
  const [form, setForm] = useState({
    decription: " ",
    person: " ",
    deadline: " ",
    time: "0"
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
        description: form.description,
        person: form.person,
        deadline: form.deadline, 
        time: "0",
        done: false
    });
    setForm({
        description: "",
        person: "",
        deadline: ""
    })
  }

  return (
    <>
      <div className="div__h2"><h2>Dodaj nowe zadanie</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="form__description">
            Zadanie
            <input name="description" value={form.description} onChange={handleChange} />
          </label>
          <label className="form__person">
            Osoba przypisana
            <select name="person" value={form.person} onChange={handleChange}>
              <option value="Empty"></option>
              <option value="Gosia">Gosia</option>
              <option value="Kamila">Kamila</option>
              <option value="Sebastian">Sebastian</option>
              <option value="Wojtek">Wojtek</option>
            </select>
          </label>
          <label className="form__deadline">
            Deadline
            <input name="deadline" value={form.deadline} onChange={handleChange} />
          </label>
        </div>
        <div className="form__button">
          <button type="submit">Dodaj</button>
        </div>
      </form>
    </>
  );
};