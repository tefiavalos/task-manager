import React from "react";
import { NavBar, BrandLogo, LinksWrapper, Links, StyledLink, LogoutButton, Hamburger, Brand, Flex, StyledLinkBrand } from "./NavBar.styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logo.png';


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
      <StyledLinkBrand to="/">
      <Flex>
        <BrandLogo src={logo} alt="Task Manager Logo" />
        <Brand>Task Manager</Brand>
        </Flex>
      </StyledLinkBrand>
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
