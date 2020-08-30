import styled from 'styled-components/macro';

export const WarningIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  right: 10px;
  z-index: 999;
  background-color: red;
  width: 36px;
  height: 36px;
  color: white;
  transition: 0.3s ease-in;
  border: 2px solid red;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
  }
`;
