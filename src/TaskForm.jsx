import React, { useState} from "react";

function TaskForm({createTask}) {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe tu tarea" 
            onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export { TaskForm };