import React, { FormEvent, useState, useEffect } from 'react';
import Input from '../Input/Input';
import { validateTitle, validateName, validateAge, validateEmail, validatePhone } from '../../validation';
import { initializeLocalStorage, getLocalStorageData, saveLocalStorageData } from '../../utils/localStorageUtils';
import { BoardData } from '../../shared/types';
import { BOARD_DATA_KEY } from '../../shared/constants'

const defaultBoardData: BoardData = {
  unclaimed: [],
  firstContact: [],
  preparingWorkOffer: [],
  sentToTherapist: []
};

const MemberForm: React.FC = () => {

  useEffect(() => {
    initializeLocalStorage(BOARD_DATA_KEY, defaultBoardData);
  }, []);

  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Create an object with the form data
    const newMember = {
      title,
      name,
      age,
      email,
      phone
    };

    // Get current board data from local storage
    const boardData = getLocalStorageData(BOARD_DATA_KEY, defaultBoardData);

    // Add new member to the "unclaimed" column
    boardData.unclaimed.push(newMember);

    // Save the updated board data back to local storage
    saveLocalStorageData(BOARD_DATA_KEY, boardData);

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
