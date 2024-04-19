import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";


function TaskList(){

  const { tasks, deleteTask } = useContext(TaskContext)

    if(tasks.length === 0 ){
        return <h2 className="text-3xl text-teal-500 font-extrabold tracking-widest capitalize">No hay 
        tareas aún</h2>

    }

    return( 
        <div className="grid grid-cols-4 gap-4">
           {tasks.map((task) => (
            <TaskCard  key={task.id} task={task} deleteTask={deleteTask}/>
           ))}
           
        </div>
    );
};

export { TaskList };