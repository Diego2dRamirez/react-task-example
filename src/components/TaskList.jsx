import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";


function TaskList(){

  const { tasks, deleteTask } = useContext(TaskContext)

    if(tasks.length === 0 ){
        return <h1>No hay Tareas Aun</h1>
    }

    return( 
        <div>
           {tasks.map((task) => (
            <TaskCard  key={task.id} task={task} deleteTask={deleteTask}/>
           ))}
           
        </div>
    );
};

export { TaskList };