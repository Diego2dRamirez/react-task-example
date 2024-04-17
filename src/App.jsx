import React, {useState, useEffect} from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { tasks as data } from "./tasks";


function App() {

  const [ tasks, setTasks] = useState([]);

  // cargar el componente
  useEffect(() =>{
      setTasks(data)
  }, []);

  function createTask(taskTitle){
   setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      descripcion: "Nueva tarea",
   }
  ]);

  };

  return (
    <React.Fragment>
      
      < TaskForm  createTask={createTask}/>
      < TaskList tasks={tasks} />

    </React.Fragment>
  )
}

export { App };