import { useState, useEffect } from "react";
import axiosInstance from "./axios-instance";

interface Project {
  id: number;
  nombre: string;
  descripcion: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const role = localStorage.getItem("role") || "user";
  const userId = localStorage.getItem("userId") || "0";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/projects", {
          params: { role, userId },
        });
        setProjects(response.data);
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
        setProjects([]);
      }
    };

    fetchProjects();
  }, [role, userId]);

  const addProject = async (nombre: string, descripcion: string) => {
    try {
      const response = await axiosInstance.post("/projects", {
        role,
        nombre,
        descripcion,
      });
      setProjects((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error al agregar proyecto:", error);
    }
  };

  const deleteProject = async (projectId: number) => {
    try {
      await axiosInstance.delete(`/projects/${projectId}`, {
        data: { role },
      });
      setProjects((prev) => prev.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error("Error al eliminar proyecto:", error);
    }
  };

  return { projects, addProject, deleteProject };
};
