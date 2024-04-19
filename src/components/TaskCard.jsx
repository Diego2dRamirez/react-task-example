import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-slate-900 rounded-md p-4 text-white">
      <h2 className="text-lg font-bold capitalize">{task.title}</h2>
      <p className="text-base font-medium text-gray-500">{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}
        type="button"
        className="bg-red-600 hover:bg-red-500 hover:font-semibold p-2 rounded-md my-4"
        >
        Eliminar
      </button>
    </div>
  )
}

export { TaskCard };