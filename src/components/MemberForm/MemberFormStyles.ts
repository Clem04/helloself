import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 40px;
`

export const FormHeader = styled.h3`
  width: 100%;
  margin-bottom: 16px;
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
`

export const FormButton = styled.button`
  width: 20%;
  padding: 16px;
  height: fit-content;
  grid-column: span 2;
  border: 1px solid #A0BDD1;
  border-radius: 6px;
  background-color: #B9D1DF;
  color: #060606;
`
