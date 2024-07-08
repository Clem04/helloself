import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`
export const InputField = styled.input`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`
export const InputError = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
`
