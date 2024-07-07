import React, { useState, ChangeEvent } from 'react';
import { ReusableInputProps } from '../types';

const ReusableInput: React.FC<ReusableInputProps> = ({ label, name, type, validate, errorMessage }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validate) {
      const validationError = validate(newValue);
      setError(validationError);
    }
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? 'red' : 'black' }}
      />
      {error && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default ReusableInput;
