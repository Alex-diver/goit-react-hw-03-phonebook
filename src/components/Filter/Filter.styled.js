import { styled } from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  display: inline-grid;
`;
export const SpanStyled = styled.span`
  margin-bottom: 5px;
`;

export const InputStyled = styled.input`
  background: transparent;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 30px;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid blue;
    background: transparent;
    outline: transparent;
  }
`;
