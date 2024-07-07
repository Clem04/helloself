import React, { ChangeEvent } from 'react';
import { ReusableInputProps } from '../types';

const ReusableInput: React.FC<ReusableInputProps> = ({ label, name, type, validate, errorMessage, value, onChange }) => {
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
