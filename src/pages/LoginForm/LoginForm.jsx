import React from 'react';
import { Button } from 'styles/Button';
import { Form, Input } from './LoginForm.styled';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginForm = e => {
    e.preventDefault();
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
      <Button>Sign in</Button>
    </Form>
  );
};
