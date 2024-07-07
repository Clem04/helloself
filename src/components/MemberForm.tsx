import React from 'react';
import Input from './Input';
import { validateTitle, validateName, validateAge, validateEmail, validatePhone } from '../validation';

const Form: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '30px',
        gap: '15px',
      }}
    >
      <b>Form</b>
      <Input
        label="Title:"
        name="title"
        type="text"
        validate={validateTitle}
        errorMessage="Title must be at least 3 characters long"
      />
      <Input
        label="Name:"
        name="name"
        type="text"
        validate={validateName}
        errorMessage="Name is required"
      />
      <Input
        label="Age:"
        name="age"
        type="text"
        validate={validateAge}
        errorMessage="Age must be a number"
      />
      <Input
        label="Email:"
        name="email"
        type="text"
        validate={validateEmail}
        errorMessage="Invalid email address"
      />
      <Input
        label="Phone:"
        name="phone"
        type="text"
        validate={validatePhone}
        errorMessage="Phone number must be 10 digits"
      />
      <button>Submit</button>
    </div>
  );
};

export default Form;
