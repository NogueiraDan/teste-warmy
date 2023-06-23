import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import * as S from "./styled.js";

const TaskList: React.FC = () => {
  const { tasks, removeTask, completeTask } = useContext(TaskContext);

  return (
    <S.TaskWrapper>
      <S.Title>Lista de Tarefas</S.Title>
      {tasks.map((task) => (
        <S.Task key={task.id}>
          <S.TaskTitle
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#3ef597" : "#f3f3f3",
            }}
          >
            {task.title}
            
          </S.TaskTitle>
          <S.TaskComplete onClick={() => completeTask(task.id)}>Concluir</S.TaskComplete>
          <S.TaskRemove onClick={() => removeTask(task.id)}>Remover</S.TaskRemove>
        </S.Task>
      ))}
    </S.TaskWrapper>
  );
};

export default TaskList;
