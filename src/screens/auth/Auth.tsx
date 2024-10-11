import React, { useState } from "react";
import { Container, ErrorMessage, InputWrapper, Title } from "./Auth.styled";
import { Button, Input } from "../../components";
import { useAuth } from "../../hooks/useAuth";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <Container onSubmit={handleLogin}>
      <Title>Iniciar Sesión</Title>
      <InputWrapper>
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit" text='Iniciar sesión'/>
    </Container>
  );
};
