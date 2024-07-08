import React from 'react';
import { 
  CardContainer, 
  CardHeader, 
  CardName,
  CardAge, 
  CardItem, 
  CardPhone 
} from './CardStyles'
import { BoardItem } from '../../shared/types';

const Card: React.FC<BoardItem> = ({ name, age, email, phone, id }) => {
  return (
    <CardContainer id={id}>
      <CardHeader>
        <CardName>{name}</CardName>
        <CardAge>{age} yo</CardAge>
      </CardHeader>
      <CardItem>{email}</CardItem>
      <CardPhone>+{phone}</CardPhone>
    </CardContainer>
  );
};

export default Card;
