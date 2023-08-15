import styled from 'styled-components';

export const ConteinerStyled = styled.div`
  width: 400px;
  margin: 20px auto 0;
  padding: 20px;
  border-radius: 10px;
  background-color: lightskyblue;
`;
export const TitleStyled = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  margin: 10px 10px;
`;
export const ContactsTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
  margin: 10px 10px;
`;
export const ButtonStyled = styled.button`
  color: gray;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  background: transparent;
  margin: 20px 0 0 110px;

  &:focus,
  &:hover {
    border: 1px solid blue;
    background: dodgerblue;
    color: black;
  }
`;
