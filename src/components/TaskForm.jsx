import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle('');
    setDescripcion('');

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea cols="30" rows="10" placeholder="Esxribe una descripción"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      >
      </textarea>
      <button type="submit">Guardar</button>
    </form>
  );
};

export { TaskForm };