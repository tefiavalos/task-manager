// TaskItem.styled.ts
import styled from "styled-components";

export const TaskInfo = styled.li` 
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const TaskName = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-right: ${({ theme }) => theme.spacing.small};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskActions = styled.div`
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const TaskSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-family: ${({ theme }) => theme.fonts.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-weight: bold;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.fonts.size.small};
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.error};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.small};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.errorHover};
  }
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: block;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: block;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;
