import { styled } from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const LabelStyled = styled.label`
  display: inline-grid;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
`;
export const SpanStyled = styled.span`
  margin-bottom: 5px;
`;

export const InputStyled = styled.input`
  background: transparent;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid blue;
    background: transparent;
    outline: transparent;
  }
`;
export const BtnStyled = styled.button`
  color: gray;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 1px solid blue;
    background: dodgerblue;
    color: black;
  }
`;
