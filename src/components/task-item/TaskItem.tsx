// TaskItem.tsx
import React from "react";
import {
  TaskInfo,
  TaskName,
  TaskActions,
  TaskSelect,
  DeleteButton,
  StyledSpan,
  NameContainer,
} from "./TaskItem.styled";

import { useUsers } from "../../hooks/useUsers";

interface TaskItemProps {
  task: any;
  updateTask: (id: number, changes: any) => void;
  deleteTask: (id: number) => void;
  userId: number;
  isAdmin: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  updateTask,
  deleteTask,
  userId,
  isAdmin,
}) => {
  const { users } = useUsers();

  const handleStatusChange = (taskId: number, newStatus: string) => {
    updateTask(taskId, { estado: newStatus });
  };

  const handleAssigneeChange = (taskId: number, newAssigneeId: number) => {
    updateTask(taskId, { asignada_a: newAssigneeId });
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  return (
    <TaskInfo>
      <NameContainer>
        <TaskName>
          {task.nombre}: {task.descripcion}
        </TaskName>
        <DeleteButton onClick={() => handleDeleteTask(task.id)}>Borrar</DeleteButton>
      </NameContainer>
      <div>
        <StyledSpan>Asignada a: </StyledSpan>
        {isAdmin ? (
          <TaskSelect
            value={task.asignada_a}
            onChange={(e) => handleAssigneeChange(task.id, parseInt(e.target.value))}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </TaskSelect>
        ) : (
          <StyledSpan>
            {users.find((user) => user.id === task.asignada_a)?.name || "Usuario no encontrado"}
          </StyledSpan>
        )}
      </div>
      <TaskActions>
        {(isAdmin || task.asignada_a === userId) && (
          <div>
            <StyledSpan>Estado: </StyledSpan>
            <TaskSelect
              value={task.estado}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="pendiente">Pendiente</option>
              <option value="en progreso">En progreso</option>
              <option value="completada">Completada</option>
            </TaskSelect>
          </div>
        )}
      </TaskActions>
    </TaskInfo>
  );
};
