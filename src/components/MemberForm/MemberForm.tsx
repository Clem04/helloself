import React, { FormEvent, useState, useEffect } from 'react';
import Input from '../Input/Input';
import { validateTitle, validateName, validateAge, validateEmail, validatePhone } from '../../validation';
import { initializeLocalStorage, getLocalStorageData, saveLocalStorageData } from '../../utils/localStorageUtils';
import { BoardData, BoardItem } from '../../shared/types';
import { BOARD_DATA_KEY } from '../../shared/constants';
import { createNewItem } from '../../utils/uniqueIdUtils';

const defaultBoardData: BoardData = {
  unclaimed: [],
  firstContact: [],
  preparingWorkOffer: [],
  sentToTherapist: []
};

const MemberForm: React.FC = () => {
  const [boardData, setBoardData] = useState<BoardData>(defaultBoardData);

  useEffect(() => {
    initializeLocalStorage(BOARD_DATA_KEY, defaultBoardData);
    const data = getLocalStorageData(BOARD_DATA_KEY, defaultBoardData);
    setBoardData(data);
  }, []);

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
      name,
      age: parseInt(age, 10),
      email,
      phone
    };

    // Create a new item with a unique ID
    const newItem = createNewItem(newMember);

    // Get current board data from local storage
    const updatedBoardData = { ...boardData };
    updatedBoardData.unclaimed.push(newItem);

    // Save the updated board data back to local storage
    saveLocalStorageData(BOARD_DATA_KEY, updatedBoardData);

    // Update the state with the new board data
    setBoardData(updatedBoardData);

    // Reset the form
    setTitle('');
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    console.log('New member added to unclaimed column:', newMember);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default MemberForm;
