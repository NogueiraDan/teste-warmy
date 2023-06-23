import React, { useState, createContext, ReactNode } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
  pendingTasks: number;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  completeTask: () => {},
  pendingTasks: 0,
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
  };

  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, completeTask, pendingTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};
