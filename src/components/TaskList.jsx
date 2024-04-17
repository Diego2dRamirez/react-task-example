import { TaskCard } from "./TaskCard";


function TaskList({tasks, deleteTask}){

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