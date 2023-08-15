import {
  FormStyled,
  LabelStyled,
  SpanStyled,
  InputStyled,
} from './Filter.styled';

export const Filter = ({ filter, onHandleSearch }) => {
  return (
    <FormStyled>
      <LabelStyled htmlFor="">
        <SpanStyled>Find contacts by name</SpanStyled>
        <InputStyled
          type="text"
          name="name"
          value={filter}
          autoComplete="off"
          placeholder=""
          onChange={onHandleSearch}
        />
      </LabelStyled>
    </FormStyled>
  );
};
