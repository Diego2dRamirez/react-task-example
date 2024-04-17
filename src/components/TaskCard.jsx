import React from "react";

function TaskCard({task, deleteTask}) {


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