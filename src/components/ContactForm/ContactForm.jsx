import { Component } from 'react';

import {
  FormStyle,
  LabelStyled,
  SpanStyled,
  InputStyled,
  BtnStyled,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <LabelStyled htmlFor="">
          <SpanStyled>Name</SpanStyled>
          <InputStyled
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Annie Copeland"
            onChange={this.handleChange}
          />
        </LabelStyled>
        <LabelStyled htmlFor="">
          <SpanStyled>Number</SpanStyled>
          <InputStyled
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="227-91-26"
            onChange={this.handleChange}
          />
        </LabelStyled>
        <BtnStyled type="submit"> Add contact </BtnStyled>
      </FormStyle>
    );
  }
}
