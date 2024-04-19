import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(porps) {
  const [tasks, setTasks] = useState([]);

  // cargar el componente
  useEffect(() => {
    setTasks(data)
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      descripcion: task.descripcion,
    }
    ]);

  };

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
    }}>
      {porps.children}
    </TaskContext.Provider>
  )
};

