import { v4 as uuidv4 } from 'uuid';

const sampleMembers = [
  { id: uuidv4(), title: 'Ms', name: 'Alice Johnson', age: 28, email: 'alice.johnson@example.com', phone: '+44 7911 123456' },
  { id: uuidv4(), title: 'Mr', name: 'Bob Smith', age: 35, email: 'bob.smith@example.com', phone: '+44 7911 654321' },
  { id: uuidv4(), title: 'Dr', name: 'Charlie Brown', age: 42, email: 'charlie.brown@example.com', phone: '+44 7911 987654' },
  { id: uuidv4(), title: 'Ms', name: 'Diana Prince', age: 31, email: 'diana.prince@example.com', phone: '+44 7911 321456' },
  { id: uuidv4(), title: 'Mr', name: 'Edward Grey', age: 29, email: 'edward.grey@example.com', phone: '+44 7911 654987' },
  { id: uuidv4(), title: 'Mrs', name: 'Fiona Gallagher', age: 37, email: 'fiona.gallagher@example.com', phone: '+44 7911 789456' },
  { id: uuidv4(), title: 'Ms', name: 'Gina Torres', age: 27, email: 'gina.torres@example.com', phone: '+44 7911 123789' },
  { id: uuidv4(), title: 'Mr', name: 'Henry Lewis', age: 45, email: 'henry.lewis@example.com', phone: '+44 7911 654123' },
];

const sampleBoardData = {
  unclaimed: sampleMembers.slice(0, 3),
  firstContact: sampleMembers.slice(3, 6),
  preparingWorkOffer: sampleMembers.slice(6, 8),
  sentToTherapist: []
};

export default sampleBoardData;
