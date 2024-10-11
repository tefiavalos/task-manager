import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectListContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: ${({ theme }) => theme.spacing.large} 0;


  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ProjectListTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const ProjectListItems = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.error};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.errorHover};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const AddProjectButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const EmptyMessageContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const EmptyMessageText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.main};
`;