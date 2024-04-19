import React from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";


function App() {



  return (
    <React.Fragment>
     
      <TaskForm/>
      <TaskList/>

    </React.Fragment>
  )
}

export { App };