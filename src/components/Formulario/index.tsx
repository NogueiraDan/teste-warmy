import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import * as S from "./styled.js";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTask, pendingTasks } = useContext(TaskContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <S.FormWrapper>
      <S.Title>Adicione sua Tarefa</S.Title>
      <S.InputWrapper>  
        <S.Input
          type="text"
          value={title}
          placeholder="Digite sua tarefa..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Button onClick={handleSubmit}>Adicionar Tarefa</S.Button>
      </S.InputWrapper>

      <S.Pending>Tarefas pendentes: {pendingTasks}</S.Pending>
    </S.FormWrapper>
  );
};

export default TaskForm;
