import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.large} auto;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
    max-width: 90%;
  }
`;

export const StyledLabel = styled.label`
  grid-column: 1 / -1;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  color: ${({ theme }) => theme.colors.importantText};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;

export const InputWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

export const StyledButton = styled.button`
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fonts.size.small};
  }
`;
