import React, { ChangeEvent } from 'react';
import { InputProps } from '../../shared/types';
import { InputContainer, InputLabel, InputField, InputError } from './InputStyles';

const Input: React.FC<InputProps> = ({ label, name, type, validate, errorMessage, value, onChange }) => {
  const [error, setError] = React.useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(e);
    if (validate) {
      const validationError = validate(newValue);
      setError(validationError);
    }
  };

  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? 'red' : 'black' }}
      />
      {error && <InputError style={{ color: 'red' }}>{errorMessage}</InputError>}
    </InputContainer>
  );
};

export default Input;
