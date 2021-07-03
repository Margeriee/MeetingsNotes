import React, { useState } from 'react';

export const AddTask = (props) => {
  const {onAdd} = props;
  const [form, setForm] = useState({
    description: " ",
    person: " ",
    deadline: " ",
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
        deadline: form.deadline
    });
    setForm({
        description: "",
        person: "",
        deadline: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dodaj nowe zadanie</h1>
      <label>
        Zadanie
        <input name="description" value={form.description} onChange={handleChange} />
      </label>
      <label>
        Osoba przypisana
        <select name="person" value={form.person} onChange={handleChange}>
          <option value="Empty"></option>
          <option value="Gosia">Gosia</option>
          <option value="Kamila">Kamila</option>
          <option value="Sebastian">Sebastian</option>
          <option value="Wojtek">Wojtek</option>
        </select>
      </label>
      <label>
        Deadline
        <input name="deadline" value={form.deadline} onChange={handleChange} />
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
};