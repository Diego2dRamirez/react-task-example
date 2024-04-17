import React, {useState, useEffect} from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { tasks as data } from "./data/tasks";


function App() {

  const [ tasks, setTasks] = useState([]);

  // cargar el componente
  useEffect(() =>{
      setTasks(data)
  }, []);

  function createTask(task){
   setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion,
   }
  ]);

  };

  function deleteTask(taskId){
    setTasks( tasks.filter(task => task.id !== taskId) )
  }

  return (
    <React.Fragment>
      
      < TaskForm  createTask={createTask}/>
      < TaskList tasks={tasks} deleteTask={deleteTask}/>

    </React.Fragment>
  )
}

export { App };