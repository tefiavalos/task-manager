import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProjectItem,
  ProjectLink,
  ProjectListContainer,
  ProjectListItems,
  ProjectListTitle,
  DeleteButton,
  AddProjectButton,
  EmptyMessageText,
  EmptyMessageContainer,
} from "./ProjectList.styled";
import { useProjects } from "../../hooks/usePorjects";

export const ProjectList: React.FC = () => {
  const { projects, deleteProject } = useProjects();
  const role = localStorage.getItem("role") || "user";
  const isAdmin = role === "admin";
  const navigate = useNavigate();

  return (
    <ProjectListContainer>
      <ProjectListTitle>Proyectos</ProjectListTitle>
      {isAdmin && (
        <AddProjectButton onClick={() => navigate("/projects/create")}>
          Crear Proyecto
        </AddProjectButton>
      )}
      <ProjectListItems>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectLink to={`/projects/${project.id}`}>
                {project.nombre}: {project.descripcion}
              </ProjectLink>
              {isAdmin && (
                <DeleteButton onClick={() => deleteProject(project.id)}>
                  Borrar Proyecto
                </DeleteButton>
              )}
            </ProjectItem>
          ))
        ) : (
          <EmptyMessageContainer>
            <EmptyMessageText>
              No tienes proyectos disponibles para mostrar.
            </EmptyMessageText>
          </EmptyMessageContainer>
        )}
      </ProjectListItems>
    </ProjectListContainer>
  );
};
