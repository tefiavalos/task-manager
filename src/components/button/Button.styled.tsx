import styled from "styled-components";

export const StyledButton = styled.button`
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: #fff;
  padding: 14px; /* Aumento del padding para mejorar el tamaño del botón */
  border: none;
  border-radius: ${({ theme }) => theme.buttons.borderRadius};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-family: ${({ theme }) => theme.fonts.main};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttons.hoverBackground};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.medium};
    font-size: ${({ theme }) => theme.fonts.size.medium};
  }
`;
