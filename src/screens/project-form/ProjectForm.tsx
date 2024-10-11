import React, { useState } from "react";
import {
  Container,
  StyledLabel,
  InputWrapper,
  StyledButton,
} from "./ProjectForm.styled";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../../hooks/usePorjects";
import { Input } from "../../components";

export const ProjectForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { addProject } = useProjects();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProject(nombre, descripcion);
      setNombre("");
      setDescripcion("");
      navigate("/projects");
    } catch (error) {
      console.error("Error al agregar el proyecto:", error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <StyledLabel htmlFor="nombre">Nombre del proyecto</StyledLabel>
      <InputWrapper>
        <Input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese el nombre del proyecto"
          type="text"
        />
      </InputWrapper>
      <StyledLabel htmlFor="descripcion">Descripción</StyledLabel>
      <InputWrapper>
        <Input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ingrese la descripción del proyecto"
          type="text"
        />
      </InputWrapper>
      <StyledButton type="submit">Guardar Proyecto</StyledButton>
    </Container>
  );
};
