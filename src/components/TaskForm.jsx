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
   <div className="p-4 mb-5 bg-slate-800 max-w-md mx-auto">
    <form onSubmit={handleSubmit}>
    <h1 className="text-4xl capitalize text-white text-center font-semibold">Crea tu tarea </h1>
      <input type="text" placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="w-full my-5 p-3 rounded-md"
      />
      <textarea cols="30" rows="10" placeholder="Esxribe una descripción"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        className="w-full my-5 p-3 rounded-md"
      >
      </textarea>
      <button type="submit" className="text-xl text-white bg-green-600 hover:bg-green-500 hover:font-semibold p-3 rounded-md">Guardar</button>
    </form>
   </div>
  );
};

export { TaskForm };