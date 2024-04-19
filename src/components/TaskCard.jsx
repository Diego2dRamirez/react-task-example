import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}
        type="button">
        Eliminar
      </button>
    </div>
  )
}

export { TaskCard };