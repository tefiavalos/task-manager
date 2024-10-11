import styled from "styled-components";

export const TaskBoardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const TaskSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
`

export const BoardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.extraLarge};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const TaskName = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
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
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-weight: bold;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.small};
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

export const CreateTaskButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: white;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-family: ${({ theme }) => theme.fonts.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;