import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const NameStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const NumberStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const DeleteButton = styled.button`
  width: 75px;
  color: gray;
  padding: 2px;
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
