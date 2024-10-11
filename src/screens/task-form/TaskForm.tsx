import React, { useState } from "react";
import {
  Container,
  StyledLabel,
  InputWrapper,
  StyledButton,
} from "./TaskForm.styled";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../../hooks/useTask";
import { Input } from "../../components";

export const TaskForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const { addTask } = useTasks(Number(id) || 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) {
      console.error("El ID del proyecto no está definido");
      navigate("/projects");
      return;
    }

    try {
      await addTask(nombre, descripcion);
      setNombre("");
      setDescripcion("");
      navigate(`/projects/${id}`);
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <StyledLabel htmlFor="nombre">Nombre de la tarea</StyledLabel>
      <InputWrapper>
        <Input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese el nombre de la tarea"
        />
      </InputWrapper>
      <StyledLabel htmlFor="descripcion">Descripción</StyledLabel>
      <InputWrapper>
        <Input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ingrese la descripción de la tarea"
        />
      </InputWrapper>
      <StyledButton type="submit">Guardar tarea</StyledButton>
    </Container>
  );
};
