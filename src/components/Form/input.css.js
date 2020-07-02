import styled from 'styled-components/macro';

export const Input = styled.input`
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ababab;
  margin-bottom: 5px;
  transition: 0.3s ease-in;

  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;
