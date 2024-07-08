import React, { FormEvent, useState } from 'react';
import Input from '../Input/Input';
import { validateTitle, validateName, validateAge, validateEmail, validatePhone } from '../../validation';
import { BoardData, BoardItem } from '../../shared/types';
import { createNewItem } from '../../utils/uniqueIdUtils';
import { FormContainer, FormHeader, InputsContainer, FormButton } from './MemberFormStyles';
import { MemberFormProps } from '../../shared/types';
import { getLocalStorageData } from '../../utils/localStorageUtils';
import { BOARD_DATA_KEY } from '../../shared/constants';
import sampleBoardData
 from '../../shared/sampleData';
const MemberForm: React.FC<MemberFormProps> = ({ updateBoardData }) => {
  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check if any field is empty
    if (!title || !name || !age || !email || !phone) {
      alert('All fields are required. Please fill in all fields.');
      return;
    }

    // Create an object with the form data
    const newMember: Omit<BoardItem, 'id'> = {
      title,
      name,
      age: parseInt(age, 10),
      email,
      phone
    };

    // Create a new item with a unique ID
    const newItem = createNewItem(newMember);

    // Get current board data from local storage
    const currentData = getLocalStorageData(BOARD_DATA_KEY, sampleBoardData);

    // Update the board data
    const updatedBoardData: BoardData = {
      ...currentData,
      unclaimed: [...currentData.unclaimed, newItem]
    };

    // Save the updated board data back to local storage
    updateBoardData(updatedBoardData);

    // Reset the form
    setTitle('');
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    console.log('New member added to unclaimed column:', newMember);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader>Add New Member</FormHeader>
      <InputsContainer>
        <Input
          label="Title:"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          validate={validateTitle}
          errorMessage="Title must be at least 3 characters long"
        />
        <Input
          label="Name:"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          validate={validateName}
          errorMessage="Name is required"
        />
        <Input
          label="Age:"
          name="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          validate={validateAge}
          errorMessage="Age must be a number"
        />
        <Input
          label="Email:"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validate={validateEmail}
          errorMessage="Invalid email address"
        />
        <Input
          label="Phone:"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          validate={validatePhone}
          errorMessage="Phone number must be 10 digits"
        />
        <FormButton type="submit">Submit</FormButton>
      </InputsContainer>
    </FormContainer>
  );
};

export default MemberForm;
