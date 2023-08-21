import React from 'react';
import { Button } from 'styles/Button';
import { Form, Input } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operators';
import { useLocation, useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginForm = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(registerUserThunk({ name, email, password }))
      .unwrap()
      .then(() => navigate(location.state?.from || '/'));
  };
  return (
    <Form onSubmit={handleLoginForm}>
      <label htmlFor="name">
        Login
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          //   required
          placeholder="Name Surname"
          autoFocus
        />
      </label>
      <label htmlFor="email">
        Email
        <Input
          id="email"
          type="text"
          name="email"
          //   required
          placeholder="Email"
          autoFocus
        />
      </label>
      <label htmlFor="password">
        Password
        <Input
          id="password"
          type="password"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title=""
          //   required
          placeholder="Password"
        />
      </label>
      <Button>Register</Button>
    </Form>
  );
};
