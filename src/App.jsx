import React from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";


function App() {
  return (
    <main className="bg-zinc-600 min-h-screen">
     <div className="container mx-auto p-4">
      <TaskForm/>
      <TaskList/>

     </div>

    </main>
  )
}

export { App };