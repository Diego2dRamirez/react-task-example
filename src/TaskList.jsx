import React, { useEffect, useState } from "react";
import { tasks as data } from "./tasks";

function TaskList(){
    const [ tasks, setTasks] = useState([]);

    // cargar el componente
    useEffect(() =>{
        setTasks(data)
    }, []);

    if( tasks.length === 0 ){
        return <h1>No hay Tareas Aun</h1>
    }

    return( 
        <div>
           {tasks.map((task) => (
            <div key={task.id}>
               <h1>{task.title}</h1>
               <p>{task.descripcion}</p>
            </div>
           ))}
           
        </div>
    );
};

export { TaskList };