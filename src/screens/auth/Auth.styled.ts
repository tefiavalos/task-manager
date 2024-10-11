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

export const Title = styled.h2`
  grid-column: 1 / -1;
  font-size: ${({ theme }) => theme.fonts.size.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
  }
`;

export const InputWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.size.small};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};
`;

