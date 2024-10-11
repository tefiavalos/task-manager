import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.main};
  position: relative;
    box-sizing: border-box;

  @media (max-width: 768px) {
  width: 100%;
    grid-template-columns: auto auto;
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const StyledLinkBrand = styled(Link)`
  text-decoration: none;
  color: #f4f1de;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const Flex = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;
  align-items: center
`;

export const Brand = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BrandLogo = styled.img`
  width: 70px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LinksWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
    transition: max-height 0.5s ease-in-out;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.importantText};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #f4f1de;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: background-color 0.4s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;


  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end
  }
`;

