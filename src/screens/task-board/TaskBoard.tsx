import React from "react";
import {
  TaskBoardContainer,
  TaskSection,
  TaskList,
  SectionTitle,
  BoardTitle,
  CreateTaskButton,
} from "./TaskBoard.styled";
import { useParams, useNavigate } from "react-router-dom";
import { TaskItem } from "../../components";
import { useTasks } from "../../hooks/useTask";

export const TaskBoard: React.FC = () => {
  const { id } = useParams();
  const { tasks, updateTask, deleteTask } = useTasks(Number(id) || 1);
  const userRole = localStorage.getItem("role") || "user";
  const userId = parseInt(localStorage.getItem("userId") || "0");
  const isAdmin = userRole === "admin";
  const navigate = useNavigate();

  const renderTasks = (status: string) =>
    tasks
      .filter((task) => task.estado === status)
      .map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          userId={userId}
          isAdmin={isAdmin}
        />
      ));

  const goToCreateTask = () => {
    navigate(`/projects/${id}/create-task`);
  };

  return (
    <>
      <BoardTitle>Tablero de Tareas del Proyecto {id}</BoardTitle>
      {isAdmin && (
        <CreateTaskButton onClick={goToCreateTask}>
          Crear Nueva Tarea
        </CreateTaskButton>
      )}
      <TaskBoardContainer>
        <TaskSection>
          <SectionTitle>Por hacer</SectionTitle>
          <TaskList>{renderTasks("pendiente")}</TaskList>
        </TaskSection>
        <TaskSection>
          <SectionTitle>En progreso</SectionTitle>
          <TaskList>{renderTasks("en progreso")}</TaskList>
        </TaskSection>
        <TaskSection>
          <SectionTitle>Completadas</SectionTitle>
          <TaskList>{renderTasks("completada")}</TaskList>
        </TaskSection>
      </TaskBoardContainer>
    </>
  );
};
