import React from "react";
import { NavBar, Brand, LinksWrapper, Links, StyledLink, LogoutButton, Hamburger } from "./NavBar.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <Brand onClick={() => navigate("/")}>Task Manager</Brand>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <LinksWrapper isOpen={isOpen}>
        <Links>
          <StyledLink to="/projects">Proyectos</StyledLink>
          {isLoggedIn && <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>}
        </Links>
      </LinksWrapper>
    </NavBar>
  );
};
