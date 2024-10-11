import { useState, useEffect } from "react";
import axiosInstance from "./axios-instance";

interface Task {
  id: number;
  nombre: string;
  descripcion: string;
  estado: string;
  proyecto_id: number;
  asignada_a: number;
}

export const useTasks = (projectId: number) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const role = localStorage.getItem("role") || "user";
  const userId = parseInt(localStorage.getItem("userId") || "0");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/tasks", {
          params: { project_id: projectId, userId, role },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };

    fetchTasks();
  }, [projectId, role, userId]);

  const addTask = async (nombre: string, descripcion: string) => {
    if (!projectId) {
      console.error("El ID del proyecto es indefinido");
      return;
    }

    try {
      const response = await axiosInstance.post("/tasks", {
        role,
        nombre,
        descripcion,
        proyecto_id: projectId, // projectId ahora está validado
        userId,
      });
      setTasks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  const updateTask = async (taskId: number, updatedFields: Partial<Task>) => {
    try {
      const response = await axiosInstance.patch(`/tasks/${taskId}`, {
        role,
        userId,
        ...updatedFields,
      });
      setTasks((prev) =>
        prev.map((task) => (task.id === taskId ? response.data : task))
      );
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await axiosInstance.delete(`/tasks/${taskId}`, {
        data: { role, userId },
      });
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  return { tasks, addTask, updateTask, deleteTask };
};
