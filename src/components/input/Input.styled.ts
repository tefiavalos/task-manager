import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.size.medium};
  font-family: ${({ theme }) => theme.fonts.main};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.input.focusBorderColor};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.medium};
    padding: 10px;
  }
`;
